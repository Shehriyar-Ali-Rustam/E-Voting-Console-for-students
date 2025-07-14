// src/App.jsx
import React, { useState, useEffect } from 'react';
import { students, candidates } from './data.js';

// Import all components
import LoginScreen from './components/LoginScreen';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeTab from './components/HomeTab';
import ResultsTab from './components/ResultsTab';
import AboutTab from './components/AboutTab';
import ContactTab from './components/ContactTab';
import CandidateModal from './components/CandidateModal';

function App() {
  // --- STATE MANAGEMENT ---
  // currentUser: null if not logged in, or the student object if logged in.
  const [currentUser, setCurrentUser] = useState(null);
  
  // votes: an object to store vote counts, e.g., { "Participant 1": 10 }
  const [votes, setVotes] = useState({});

  // hasVoted: a boolean to check if the CURRENT logged-in user has voted.
  const [hasVoted, setHasVoted] = useState(false);

  // activeTab: which tab is currently visible ('home', 'results', etc.)
  const [activeTab, setActiveTab] = useState('home');

  // modalCandidate: which candidate's details to show in the modal.
  const [modalCandidate, setModalCandidate] = useState(null);

  // --- EFFECTS ---
  // This effect runs once when the app starts. It loads saved votes from localStorage.
  useEffect(() => {
    const initialVotes = {};
    for (const name in candidates) {
      initialVotes[name] = parseInt(localStorage.getItem(`vote_${name}`)) || 0;
    }
    setVotes(initialVotes);
  }, []);

  // This effect runs whenever the currentUser changes (i.e., on login).
  useEffect(() => {
    if (currentUser) {
      const userHasVoted = localStorage.getItem(`voted_${currentUser.id}`) === 'true';
      setHasVoted(userHasVoted);
    }
  }, [currentUser]);

  // --- HANDLER FUNCTIONS ---
  const handleLogin = (studentId, password) => {
    const student = students[studentId];
    if (student && student.password === password) {
      setCurrentUser({ id: studentId, ...student });
    } else {
      alert('Invalid student ID or password');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const handleVote = (candidateName) => {
    if (hasVoted) {
      alert('You have already voted! Each student can only vote once.');
      return;
    }

    if (window.confirm(`Are you sure you want to vote for ${candidateName}? This action cannot be undone.`)) {
      const newVotes = { ...votes, [candidateName]: (votes[candidateName] || 0) + 1 };
      setVotes(newVotes);
      
      // Save to localStorage
      localStorage.setItem(`vote_${candidateName}`, newVotes[candidateName]);
      localStorage.setItem(`voted_${currentUser.id}`, 'true');

      setHasVoted(true);
      alert(`Thank you for voting for ${candidateName}! Your vote has been recorded.`);
      
      // Close modal if it's open
      if(modalCandidate) {
        setModalCandidate(null);
      }
    }
  };

  const handleViewDetails = (candidateName) => {
    setModalCandidate({ name: candidateName, details: candidates[candidateName] });
  };

  const handleCloseModal = () => {
    setModalCandidate(null);
  };

  // --- RENDER LOGIC ---
  const renderTabContent = () => {
    switch (activeTab) {
      case 'results': return <ResultsTab votes={votes} candidates={candidates} />;
      case 'about': return <AboutTab />;
      case 'contact': return <ContactTab />;
      case 'home':
      default:
        return <HomeTab candidates={candidates} hasVoted={hasVoted} onVote={handleVote} onViewDetails={handleViewDetails} />;
    }
  };

  // If not logged in, show the Login Screen
  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // If logged in, show the main application
  return (
    <>
      <Header />
      <Navbar user={currentUser} onLogout={handleLogout} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="container mt-4">
        {renderTabContent()}
      </div>
      <Footer />
      <CandidateModal candidate={modalCandidate} onClose={handleCloseModal} onVote={handleVote} hasVoted={hasVoted} />
    </>
  );
}

export default App;
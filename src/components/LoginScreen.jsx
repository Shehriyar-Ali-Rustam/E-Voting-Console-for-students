// src/components/LoginScreen.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVoteYea, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

function LoginScreen({ onLogin }) {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(studentId, password);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Please contact the election committee at studentvotes@cust.edu.pk to reset your password.');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h3><FontAwesomeIcon icon={faVoteYea} /> CUST Voting System</h3>
          <p>Secure student voting platform</p>
        </div>
        <div className="login-body">
          <div className="mb-4 text-center">
            {/* The wizard icon in your screenshot is different, update the src if you have it */}
            <img src="https://cdn-icons-png.flaticon.com/512/891/891410.png" alt="Login" style={{ width: '80px' }} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Student ID" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-login mb-3">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </button>
            <div className="text-center">
              <a href="#" onClick={handleForgotPassword} className="text-muted small">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
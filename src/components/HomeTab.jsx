import React from 'react';
import CandidateCard from './CandidateCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function HomeTab({ candidates, hasVoted, onVote, onViewDetails }) {
  return (
    <div className="tab-content" style={{ display: 'block' }}>
      <div className="text-center mb-5">
        <h2 className="mb-3">Student Union Election 2025</h2>
        <p className="lead text-muted">Select your preferred candidate below</p>
        <div className="alert alert-info">
          <FontAwesomeIcon icon={faInfoCircle} /> You can only vote once. Choose wisely!
        </div>
      </div>
      <div className="row">
        {Object.entries(candidates).map(([name, details]) => (
          <CandidateCard
            key={name}
            name={name}
            details={details}
            hasVoted={hasVoted}
            onVote={onVote}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
}
export default HomeTab;
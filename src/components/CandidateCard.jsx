import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTag, faGraduationCap, faUsers, faInfoCircle, faVoteYea } from '@fortawesome/free-solid-svg-icons';

function CandidateCard({ name, details, hasVoted, onVote, onViewDetails }) {
  return (
    <div className="col-md-4">
      <div className="card card-candidate">
        <img src={details.image} className="card-img-top" alt={name} />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">
            <FontAwesomeIcon icon={faUserTag} /> {details.tagline}
          </p>
          <div className="mb-3">
            <span className="badge-tag"><FontAwesomeIcon icon={faGraduationCap} /> {details.department}</span>
            <span className="badge-tag"><FontAwesomeIcon icon={faUsers} /> Section {details.section}</span>
          </div>
          <button className="btn btn-primary w-100" onClick={() => onViewDetails(name)}>
            <FontAwesomeIcon icon={faInfoCircle} /> View Details
          </button>
          <button
            className={`btn w-100 mt-2 ${hasVoted ? 'btn-secondary' : 'btn-success'}`}
            onClick={() => onVote(name)}
            disabled={hasVoted}
          >
            <FontAwesomeIcon icon={faVoteYea} /> {hasVoted ? 'Voted' : 'Vote'}
          </button>
        </div>
      </div>
    </div>
  );
}
export default CandidateCard;
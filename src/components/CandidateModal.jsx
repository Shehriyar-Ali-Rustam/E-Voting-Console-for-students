import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUsers, faVenusMars, faQuoteLeft, faCheck } from '@fortawesome/free-solid-svg-icons';

function CandidateModal({ candidate, onClose, onVote, hasVoted }) {
  if (!candidate) return null; // Don't render anything if no candidate is selected

  const { name, details } = candidate;

  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{name} Details</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body candidate-modal">
            <img src={details.image} alt={name} id="modalCandidateImage" />
            <h4 className="text-center">{name}</h4>
            <p className="text-muted text-center">{details.tagline}</p>
            
            <div className="row mt-4">
              <div className="col-md-6"><p><strong><FontAwesomeIcon icon={faGraduationCap} /> Department:</strong> {details.department}</p></div>
              <div className="col-md-6"><p><strong><FontAwesomeIcon icon={faUsers} /> Section:</strong> {details.section}</p></div>
              <div className="col-md-6"><p><strong><FontAwesomeIcon icon={faVenusMars} /> Gender:</strong> {details.gender}</p></div>
              <div className="col-md-6"><p><strong><FontAwesomeIcon icon={faQuoteLeft} /> Motto:</strong> {details.moto}</p></div>
            </div>
            
            <div className="mt-4">
              <h5>Campaign Promises</h5>
              <ul className="list-group list-group-flush">
                {details.promises.map(p => <li key={p} className="list-group-item"><FontAwesomeIcon icon={faCheck} className="text-success" /> {p}</li>)}
              </ul>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            <button type="button" className={`btn btn-primary ${hasVoted ? 'disabled' : ''}`} disabled={hasVoted} onClick={() => onVote(name)}>
              Vote for this candidate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CandidateModal;
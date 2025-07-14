import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faLock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AboutTab() {
  return (
    <div className="tab-content" style={{ display: 'block' }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h4><FontAwesomeIcon icon={faUniversity} /> About This Election</h4>
              </div>
              <div className="card-body">
                <p>The CUST Student Union Election is an annual event where students elect their representatives for various positions in the student government.</p>
                <p>This digital voting platform ensures a fair, transparent, and secure voting process for all eligible students.</p>
                <p>The system was developed by a team of CUST students as part of their academic project.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h4><FontAwesomeIcon icon={faLock} /> Voting Security</h4>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><FontAwesomeIcon icon={faCheckCircle} className="text-success" /> One student - One vote</li>
                  <li className="list-group-item"><FontAwesomeIcon icon={faCheckCircle} className="text-success" /> Encrypted vote storage</li>
                  <li className="list-group-item"><FontAwesomeIcon icon={faCheckCircle} className="text-success" /> Anonymous voting</li>
                  <li className="list-group-item"><FontAwesomeIcon icon={faCheckCircle} className="text-success" /> Tamper-proof results</li>
                  <li className="list-group-item"><FontAwesomeIcon icon={faCheckCircle} className="text-success" /> Real-time monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default AboutTab;
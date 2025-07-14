import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faInfoCircle, faMapMarkerAlt, faClock, faPhone, faShareAlt } from '@fortawesome/free-solid-svg-icons';

function ContactTab() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! The election committee will get back to you soon.');
        e.target.reset();
    };

  return (
    <div className="tab-content" style={{ display: 'block' }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h4><FontAwesomeIcon icon={faEnvelope} /> Contact Election Committee</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3"><label className="form-label">Your Name</label><input type="text" className="form-control" required /></div>
                  <div className="mb-3"><label className="form-label">Email</label><input type="email" className="form-control" required /></div>
                  <div className="mb-3"><label className="form-label">Message</label><textarea className="form-control" rows="4" required></textarea></div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h4><FontAwesomeIcon icon={faInfoCircle} /> Election Information</h4>
              </div>
              <div className="card-body">
                <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Location</h5>
                <p>Capital University of Science & Technology, Islamabad</p>
                <h5 className="mt-4"><FontAwesomeIcon icon={faClock} /> Voting Hours</h5>
                <p>9:00 AM to 5:00 PM (Monday to Friday)</p>
                <h5 className="mt-4"><FontAwesomeIcon icon={faPhone} /> Contact</h5>
                <p><FontAwesomeIcon icon={faEnvelope} /> Shehriyarali122@gmail.com</p>
                <p><FontAwesomeIcon icon={faPhone} /> 03448609555</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default ContactTab;
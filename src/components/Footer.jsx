import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About CUST</h5>
            <p>Capital University of Science & Technology is a premier institution committed to excellence in education and research.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">University Website</a></li>
              <li><a href="#" className="text-white">Student Portal</a></li>
              <li><a href="#" className="text-white">Academic Calendar</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Developers</h5>
            <p>This voting system was developed as part of end semester web engineering project.</p>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          <p className="mb-0">© 2025 CUST Voting System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
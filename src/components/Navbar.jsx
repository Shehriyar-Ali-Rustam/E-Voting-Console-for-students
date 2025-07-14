import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faInfoCircle, faEnvelope, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar({ user, onLogout, activeTab, setActiveTab }) {
  const navItems = [
    { key: 'home', icon: faHome, label: 'Home' },
    { key: 'results', icon: faChartBar, label: 'Results' },
    { key: 'about', icon: faInfoCircle, label: 'About' },
    { key: 'contact', icon: faEnvelope, label: 'Contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {navItems.map(item => (
              <li className="nav-item" key={item.key}>
                <a
                  className={`nav-link ${activeTab === item.key ? 'active' : ''}`}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setActiveTab(item.key); }}
                >
                  <FontAwesomeIcon icon={item.icon} /> {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center">
            <span className="navbar-text text-white me-3">
              <FontAwesomeIcon icon={faUser} /> {user.name}
            </span>
            <button onClick={onLogout} className="btn btn-sm btn-outline-light">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
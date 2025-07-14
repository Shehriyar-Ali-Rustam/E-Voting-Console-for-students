import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="display-4"><FontAwesomeIcon icon={faVoteYea} /> CUST Voting Console</h1>
        <p className="lead">Cast your vote securely and transparently</p>
      </div>
    </header>
  );
}
export default Header;
import React from 'react';

import './Header.scss';

const Header = () => (
  <div className="Header">
    <nav className="Header pt-navbar pt-dark">
      <div className="pt-navbar-group pt-align-left">
        <div className="pt-navbar-heading">Fiber App Base</div>
        <input className="pt-input" placeholder="Search files..." type="text" />
      </div>
      <div className="pt-navbar-group pt-align-right">
        <button className="pt-button pt-minimal pt-icon-home">Home</button>
        <button className="pt-button pt-minimal pt-icon-document">Files</button>
        <span className="pt-navbar-divider" />
        <button className="pt-button pt-minimal pt-icon-user" />
        <button className="pt-button pt-minimal pt-icon-notifications" />
        <button className="pt-button pt-minimal pt-icon-cog" />
      </div>
    </nav>
  </div>
);

export default Header;

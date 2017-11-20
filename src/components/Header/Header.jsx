import React from 'react';
import * as Blueprint from '@blueprintjs/core';

import './Header.scss';

const menu = (
  <Blueprint.Menu>
    <Blueprint.MenuItem text="New" />
    <Blueprint.MenuItem text="Open" />
    <Blueprint.MenuItem text="Save" />
    <Blueprint.MenuDivider />
    <Blueprint.MenuItem text="Settings..." />
  </Blueprint.Menu>
);

const Header = () => (
  <div className="Header">
    <nav className="Header__nav pt-navbar pt-dark">
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
    <Blueprint.Popover content={menu} position={Blueprint.Position.BOTTOM_LEFT}>
      <Blueprint.Button text="Actions" />
    </Blueprint.Popover>
  </div>
);

export default Header;

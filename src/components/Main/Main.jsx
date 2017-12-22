import React from 'react';
import * as Blueprint from '@blueprintjs/core';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Main.scss';

const menu = (
  <Blueprint.Menu>
    <Blueprint.MenuItem text="New" />
    <Blueprint.MenuItem text="Open" />
    <Blueprint.MenuItem text="Save" />
    <Blueprint.MenuDivider />
    <Blueprint.MenuItem text="Settings..." />
  </Blueprint.Menu>
);

const Main = () => (
  <div className="Main">
    <Header />
    <div className="Main__content">
      <Blueprint.Popover content={menu} position={Blueprint.Position.BOTTOM_LEFT}>
        <Blueprint.Button text="Actions" />
      </Blueprint.Popover>
      <p className="Main__loremipsum">
        Lorem ipsum dolor sit amet ...
      </p>
    </div>
    <Footer />
  </div>
);

export default Main;

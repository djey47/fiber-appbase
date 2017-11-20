import React from 'react';
import ReactDOM from 'react-dom';

import '@blueprintjs/core/dist/blueprint.css';
import './styles/base.scss';

import Main from './components/Main/Main';

const init = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('app'),
  );
};

init();

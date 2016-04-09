import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import AppBar from 'material-ui/lib/app-bar'


ReactDOM.render(
  <div>
    <AppBar title={<span>Title</span>}>
    </AppBar>
    <MainPage />
  </div>,
  document.getElementById('main')
);

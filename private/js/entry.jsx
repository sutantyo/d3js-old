import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainPage from './MainPage';

import Basic from './basic/Basic';
import BasicShapes from './basic/BasicShapes';
import BasicCharts from './basic/BasicCharts';
import BasicData from './basic/BasicData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import AppBar from 'material-ui/AppBar'


ReactDOM.render(
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/index" component={MainPage} />
      <Route path="/" component={MainPage} />
      <Route path="/Basic" component={Basic} />
      <Route path="/BasicShapes" component={BasicShapes} />
      <Route path="/BasicCharts" component={BasicCharts} />
      <Route path="/BasicData" component={BasicData} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('main')
);


/*
    <AppBar title={<span>Title</span>}>
    </AppBar>
    */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import dotenv from 'dotenv';



import DisplayTopics from './components/DisplayTopics';
import AddTopic from './components/AddTopic';
import Ideas from './components/Ideas';

dotenv.config({ silent: true });

import App from './App';
import Home from './components/Home';

import './index.css';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }/>
      <Route path="/home" component={ Home }/>
      <Route path="/add" component={ AddTopic }/>
  </Router>,
  document.getElementById('root')

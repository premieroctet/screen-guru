import React from 'react';
import { Router } from '@reach/router';
import GithubCorner from 'react-github-corners';

import Layout from './components/Layout';
import Home from './containers/Home';
import Screenshot from './containers/Screenshot';

import 'react-github-corners/dist/GithubCorner.css';
import './assets/layout.css';

const App = () => (
  <Layout>
    <GithubCorner color="white" backgroundColor="#E67E22" url="https://github.com/premieroctet/screen-guru" />

    <Router>
      <Home path="/" />
      <Screenshot path="screenshot" />
    </Router>
  </Layout>
);

export default App;

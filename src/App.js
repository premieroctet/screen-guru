import React from 'react';
import { Router } from '@reach/router';

import GithubCorner from 'react-github-corners';
import Layout from './components/Layout';
import Home from './screens/Home';
import Screenshot from './screens/Screenshot';

import 'react-github-corners/dist/GithubCorner.css';
import './assets/layout.css';

export default () => (
  <Layout>
    <GithubCorner color="white" backgroundColor="#1050FF" url="https://github.com/premieroctet/screen-guru" />

    <Router>
      <Home path="/" />
      <Screenshot path="screenshot" />
    </Router>
  </Layout>
);

import React from 'react';
import { Router } from '@reach/router';

import Layout from './components/Layout';
import Home from './screens/Home';
import Screenshot from './screens/Screenshot';

import './assets/layout.css';

export default () => (
  <Layout>
    <Router>
      <Home path="/" />
      <Screenshot path="screenshot" />
    </Router>
  </Layout>
);

import React from 'react';
import GithubCorner from 'react-github-corners';
import Layout from '../components/Layout';
import Home from '../containers/Home';

const App = () => (
	<Layout>
		<GithubCorner color="white" backgroundColor="#1050FF" url="https://github.com/premieroctet/screen-guru" />
		<Home />
	</Layout>
);

export default App;

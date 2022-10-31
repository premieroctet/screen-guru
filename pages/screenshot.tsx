import React from 'react';
import GithubCorner from 'react-github-corners';
import Layout from '../components/Layout';
import Screenshot from '../containers/Screenshot';

const ScreenshotPage = () => (
	<Layout>
		<GithubCorner color="white" backgroundColor="#1050FF" url="https://github.com/premieroctet/screen-guru" />
		<Screenshot />
	</Layout>
);

export default ScreenshotPage;

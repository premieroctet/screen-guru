import React, { Component, Fragment } from 'react';
import Confetti from 'react-confetti';
import SizeMe from 'react-sizeme';

import Header from './components/Header';
import SettingsPanel from './components/SettingsPanel';
import Footer from './components/Footer';
import { isValidURL } from './utils/utils';
import { ScreenWrapper, ScreenInner, InputSubmit, InputText, ErrorWrapper, BackButton, Image } from './elements';

import './assets/layout.css';

const SERVICE_URL = process.env.REACT_APP_LAMBDA_ENDPOINT;
const DEFAULT_BACKGROUND = '#E9D460';
const INITIAL_STATE = {
  isLoading: false,
  isReady: false,
  hasError: false,
  url: '',
  color: DEFAULT_BACKGROUND,
};

class App extends Component {
  state = INITIAL_STATE;

  urlInputRef = React.createRef();

  componentDidMount = () => {
    this.urlInputRef.current.focus();
  };

  handleOnSubmit = e => {
    e.preventDefault();

    if (isValidURL(this.state.url)) {
      this.setState({ isLoading: true, hasError: false });
    }
  };

  handleImageError = () => {
    this.setState({ hasError: true, isLoading: false });
  };

  handleImageLoaded = () => {
    this.setState({ isReady: true, isLoading: false, hasError: false });
  };

  handleUrlChange = e => {
    this.setState({ url: e.target.value });
  };

  handleBack = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { width, height } = this.props.size;
    const { isLoading, isReady, color, url, hasError } = this.state;

    return (
      <ScreenWrapper>
        <ScreenInner>
          <Header isLoading={isLoading} isReady={isReady} hasError={hasError} />

          {isReady && <Confetti run={isReady} recycle={false} width={width} height={height} colors={['#1050ff']} />}

          {hasError && (
            <ErrorWrapper>
              <span role="img" aria-label="Error">
                😱
              </span>{' '}
              The Guru is KO. You can submit{' '}
              <a
                href={`https://github.com/premieroctet/screen-guru/issues/new?title=Link%20broken&body=Link:%20${encodeURI(
                  url,
                )}`}
              >
                an issue
              </a>{' '}
              or try later. Sorry!
            </ErrorWrapper>
          )}

          {!isLoading && !isReady && (
            <form onSubmit={this.handleOnSubmit}>
              <InputText
                ref={this.urlInputRef}
                placeholder="Website URL"
                value={this.state.url}
                onChange={this.handleUrlChange}
                type="text"
                autoComplete="off"
              />

              <InputSubmit value="Create" type="submit" onClick={this.makeScreenshot} />

              <SettingsPanel color={this.state.color} onChangeComplete={color => this.setState({ color: color.hex })} />
            </form>
          )}

          {(isLoading || isReady) && (
            <Fragment>
              <a download href={`${SERVICE_URL}?url=${url}&color=${color.substring(1, color.length)}`}>
                <Image
                  className={isLoading ? 'hidden' : null}
                  alt="Your screenshot"
                  onError={this.handleImageError}
                  onLoad={this.handleImageLoaded}
                  src={`${SERVICE_URL}?url=${url}&color=${color.substring(1, color.length)}`}
                />
              </a>
              <br />
              {isReady && <BackButton onClick={this.handleBack}>Retour</BackButton>}
            </Fragment>
          )}
        </ScreenInner>

        <Footer />
      </ScreenWrapper>
    );
  }
}

export default SizeMe({ monitorHeight: true })(App);

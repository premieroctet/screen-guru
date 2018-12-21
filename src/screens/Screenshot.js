import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Image, BackButton } from './elements';

const SERVICE_URL = process.env.REACT_APP_LAMBDA_ENDPOINT;

class Screenshot extends Component {
  componentDidMount() {
    if (!this.props.url) {
      this.props.navigate('/');
    }
  }

  componentDidUpdate() {
    if (this.props.hasError) {
      this.props.navigate('/');
    }
  }

  render() {
    const { props } = this;
    const color = props.color.substring(1, props.color.length);

    return (
      <Fragment>
        {(props.isLoading || props.isReady) && (
          <Fragment>
            <Image
              className={props.isLoading ? 'hidden' : null}
              alt="Your screenshot"
              onError={props.setImageError}
              onLoad={props.setImageLoaded}
              src={`${SERVICE_URL}?url=${props.url}&color=${color}`}
            />
            <br />
            {props.isReady && <BackButton onClick={() => props.navigate('/')}>Back</BackButton>}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapState = state => ({
  isReady: state.app.isReady,
  isLoading: state.app.isLoading,
  hasError: state.app.hasError,
  url: state.app.url,
  color: state.app.color,
});

const mapDispatch = state => ({
  setImageError: state.app.setImageError,
  setImageLoaded: state.app.setImageLoaded,
});

export default connect(
  mapState,
  mapDispatch,
)(Screenshot);

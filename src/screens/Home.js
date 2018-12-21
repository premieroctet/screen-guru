import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { isValidURL } from '../utils/utils';
import { InputSubmit, InputText } from './elements';
import ErrorPanel from '../components/ErrorPanel/ErrorPanel';
import SettingsPanel from '../components/SettingsPanel';

class Home extends Component {
  urlInputRef = React.createRef();

  componentDidMount = () => {
    if (this.urlInputRef.current) {
      this.urlInputRef.current.focus();
    }

    this.props.clear();
  };

  handleOnSubmit = e => {
    e.preventDefault();

    if (isValidURL(this.props.url)) {
      this.props.setLoading();
      this.props.navigate(`/screenshot`);
    }
  };

  render() {
    const { isLoading, isReady, url, hasError } = this.props;

    return (
      <Fragment>
        {hasError && <ErrorPanel url={url} />}

        {!isLoading && !isReady && (
          <form onSubmit={this.handleOnSubmit}>
            <InputText
              ref={this.urlInputRef}
              placeholder="Website URL"
              value={this.props.url}
              onChange={e => this.props.updateUrl(e.target.value)}
              type="text"
              autoComplete="off"
            />

            <InputSubmit value="Create" type="submit" />

            <SettingsPanel color={this.props.color} onChangeComplete={color => this.props.updateColor(color.hex)} />
          </form>
        )}
      </Fragment>
    );
  }
}

const mapState = state => ({
  isReady: state.app.isReady,
  isLoading: state.app.isLoading,
  hasError: state.app.hasError,
  color: state.app.color,
  url: state.app.url,
});

const mapDispatch = state => ({
  updateUrl: state.app.updateUrl,
  updateColor: state.app.updateColor,
  setImageError: state.app.setImageError,
  setLoading: state.app.setLoading,
  clear: state.app.clear,
});

export default connect(
  mapState,
  mapDispatch,
)(Home);

import React, { useEffect, useRef, useState } from 'react';
import { navigate } from '@reach/router';
import { useSelector, useDispatch } from 'react-redux';
import { isValidURL } from '../utils/utils';
import { InputSubmit, InputText } from './elements';
import ErrorPanel from '../components/ErrorPanel/ErrorPanel';
import SettingsPanel from '../components/SettingsPanel';

const Home = props => {
  const urlInputRef = useRef(null);
  const [hasInvalidUrl, setHasInvalidUrl] = useState(false);

  const dispatch = useDispatch();
  const { updateUrl, setLoading, clear } = dispatch.app;

  const isReady = useSelector(state => state.app.isReady);
  const isLoading = useSelector(state => state.app.isLoading);
  const hasError = useSelector(state => state.app.hasError);
  const url = useSelector(state => state.app.url);

  useEffect(() => {
    if (urlInputRef.current) {
      urlInputRef.current.focus();
    }

    clear();

    const queryParams = new URLSearchParams(props.location.search);
    const url = queryParams.get('url');

    if (url && isValidURL(url)) {
      updateUrl(url);
    }
  }, []);

  const handleOnChange = e => {
    updateUrl(e.target.value);
    setHasInvalidUrl(false);
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    if (isValidURL(url)) {
      setLoading();
      navigate(`/screenshot`);
    } else {
      setHasInvalidUrl(true);
    }
  };

  return (
    <>
      {hasError && <ErrorPanel url={url} />}

      {!isLoading && !isReady && (
        <form onSubmit={handleOnSubmit}>
          <InputText
            autocorrect="off"
            autocapitalize="none"
            ref={urlInputRef}
            placeholder="Website URL"
            value={url}
            onChange={handleOnChange}
            type="text"
            invalidUrl={hasInvalidUrl}
            autoComplete="off"
          />

          <InputSubmit value="Create" type="submit" />

          <SettingsPanel />
        </form>
      )}
    </>
  );
};

export default Home;

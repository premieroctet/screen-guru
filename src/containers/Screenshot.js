import React, { useEffect } from 'react';
import { Redirect, navigate } from '@reach/router';
import { useSelector, useDispatch } from 'react-redux';
import { Image, BackButton } from './elements';

const SERVICE_URL = process.env.REACT_APP_LAMBDA_ENDPOINT;

const Screenshot = () => {
  const dispatch = useDispatch();
  const { setImageLoaded, setImageError } = dispatch.app;

  const hasError = useSelector(state => state.app.hasError);
  const url = useSelector(state => state.app.url);
  const isLoading = useSelector(state => state.app.isLoading);
  const isReady = useSelector(state => state.app.isReady);
  const noBackground = useSelector(state => state.app.noBackground);

  let color = useSelector(state => state.app.color);
  color = color.substring(1, color.length);

  useEffect(() => {
    if (hasError) {
      navigate('/');
    }
  }, [hasError]);

  if (!url) {
    return <Redirect to="/" noThrow />;
  }

  let plainUrl = `${SERVICE_URL}?url=${encodeURIComponent(url)}`;

  if (!noBackground) {
    plainUrl += `&color=${color}`;
  }

  return (
    <>
      {(isLoading || isReady) && (
        <>
          <Image
            className={isLoading ? 'hidden' : null}
            alt="Your screenshot"
            onError={setImageError}
            onLoad={setImageLoaded}
            src={plainUrl}
          />
          <br />
          {isReady && <BackButton onClick={() => navigate('/')}>Back</BackButton>}
        </>
      )}
    </>
  );
};

export default Screenshot;

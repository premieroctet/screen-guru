import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateType } from '../models/app';
import { Image, BackButton } from './elements';

const SERVICE_URL = process.env.NEXT_PUBLIC_LAMBDA_ENDPOINT;

const Screenshot = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { setImageLoaded, setImageError } = dispatch.app;

  const hasError = useSelector((state: { app: stateType }) => state.app.hasError);
  const url = useSelector((state: { app: stateType }) => state.app.url);
  const isLoading = useSelector((state: { app: stateType }) => state.app.isLoading);
  const isReady = useSelector((state: { app: stateType }) => state.app.isReady);
  const noBackground = useSelector((state: { app: stateType }) => state.app.noBackground);

  let color = useSelector((state: { app: stateType }) => state.app.color);
  color = color.substring(1, color.length);

  useEffect(() => {
    if (hasError) {
      router.push('/');
    }
  }, [hasError, router]);

  if (!url) {
    router.push('/');
    return <></>;
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
            className={isLoading ? 'hidden' : ''}
            alt="Your screenshot"
            onError={setImageError}
            onLoad={setImageLoaded}
            src={plainUrl}
          />
          <br />
          {isReady && <BackButton onClick={() => router.push('/')}>Back</BackButton>}
        </>
      )}
    </>
  );
};

export default Screenshot;

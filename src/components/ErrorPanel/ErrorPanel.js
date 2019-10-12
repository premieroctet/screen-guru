import React from 'react';
import { ErrorWrapper } from './elements';

const ErrorPanel = () => (
  <ErrorWrapper>
    <span role="img" aria-label="Error">
      😱
    </span>{' '}
    The Guru is KO. You can submit <a href={`https://github.com/premieroctet/screen-guru/issues`}>an issue</a> or try
    later. Sorry!
  </ErrorWrapper>
);

export default ErrorPanel;

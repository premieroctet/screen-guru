import React from 'react';
import { ErrorWrapper } from './elements';

export default props => (
  <ErrorWrapper>
    <span role="img" aria-label="Error">
      😱
    </span>{' '}
    The Guru is KO. You can submit <a href={`https://github.com/premieroctet/screen-guru/issues`}>an issue</a> or try
    later. Sorry!
  </ErrorWrapper>
);

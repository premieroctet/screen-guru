import styled from 'styled-components';

export const ScreenWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 500px) {
    padding: 0 40px;
  }
`;

export const ScreenInner = styled.div`
  h1 {
    font-size: 3.2em;
    font-weight: 900;
    margin: 0;
    margin-bottom: 5px;
  }

  h2 {
    margin: 0;
    margin-bottom: 60px;
  }
`;

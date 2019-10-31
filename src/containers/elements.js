import styled from 'styled-components';

export const Image = styled.img`
  width: 60%;

  &.hidden {
    visibility: hidden;
    overflow: hidden;
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const BackButton = styled.button`
  border: 3px solid #e67e22;
  color: #e67e22;
  border-radius: 5px;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  margin-top: 20px;

  :hover {
    background: #e67e22;
    color: white;
  }
`;

export const InputSubmit = styled.input`
  display: inline-block;
  border-top: 4px solid #e67e22;
  border-bottom: 4px solid #e67e22;
  border-right: 4px solid #e67e22;
  border-left: 1px solid #e67e22;
  color: #e67e22;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 1.4em;
  padding: 15px;
  cursor: pointer;
  background-color: white;
  margin: 0;

  :hover {
    background: #e67e22;
    color: white;
  }
`;

export const InputText = styled.input`
  padding: 15px;
  font-size: 1.4em;
  box-sizing: border-box;
  outline: none;
  outline-width: 0;
  width: 400px;
  border: 4px solid #e67e22;
  border-top-left-radius: 5px;
  border-right: 3px solid #e67e22;
  border-bottom-left-radius: 5px;
  color: #e67e22;
  background: ${props => (props.invalidUrl ? '#ffefef' : 'transparent')};
  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;

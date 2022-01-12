import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;

  @media (prefers-color-scheme: dark) {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const LoginContainer = styled.div`
  width: 80%;
  height: 50%;
  background: white;
  border: 1px solid black;
  padding: 7.5px 20px;
  position: absolute;
  border-radius: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

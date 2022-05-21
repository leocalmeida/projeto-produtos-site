import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

const Loading = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* border: solid #ccc 10px; */
  border: 5px solid #ccc;
  border-right-color: transparent;
  animation: ${rotate} 1s infinite;
`;

export default Loading;

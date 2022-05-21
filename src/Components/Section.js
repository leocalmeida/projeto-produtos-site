import styled from 'styled-components';
import { keyframes } from 'styled-components';

const animaLeft = keyframes`
  to {
    transform: initial;
    opacity: initial;
  }
`;

const Section = styled.div`
  transform: translateX(-20px);
  opacity: 0;
  animation: ${animaLeft} 0.5s forwards;
`;

export default Section;

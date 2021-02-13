import styled from 'styled-components';
import mediaQuery from '@styles/mediaQuery';

export const ContainerWrapper = styled.div`
  max-width: calc(100% - 54px);
  margin: 0 auto;

  ${mediaQuery.laptop`
    max-width: 980px;
  `}  
`;

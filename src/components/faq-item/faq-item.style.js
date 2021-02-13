import styled from 'styled-components';
import colors from '@styles/colors';
import { body } from '@styles/fonts';
import mediaQuery from '@styles/mediaQuery';

export const Item = styled.div`
  border: 1px solid ${colors.purple500};
  padding: 14px 8px;
  box-shadow: 0 6px 7px rgba(000,000,000, 0.16);
  border-radius: 7px;
  margin-bottom: 20px;

  ${mediaQuery.tablet`
    margin-bottom: 30px;
  `}

  &:nth-last-child(1) {
    margin-bottom: 0;
  }
`;

export const ItemBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 7px;
  cursor: pointer;
`;

export const FaqTitle = styled.h4`
  margin-right: 5px;
  ${body.xlarge(500)};
  color: ${colors.green500};
  width: calc(100% - 12px);
`;

export const Ico = styled.div`
  display: table;
  width: 12px;
  transform: ${({active}) => (active) ? 'rotateX(180deg);' : 'none'};

  svg {
    path {
      stroke: ${colors.green500};
    }
  }
`;

export const Text = styled.div`
  ${body.small};
  color: ${colors.gray100};
  margin-top: 12px;
  display: ${({active}) => (active) ? 'block' : 'none'};
  font-size: 12px;

  &:nth-last-child(1) {
    margin-bottom: 0;
    
  }
`;

import styled from 'styled-components';
import { headings, body } from '@styles/fonts';
import mediaQuery from '@styles/mediaQuery';
import colors from '@styles/colors'

export const IconHolder = styled.div`
  width: 50px;
`;

export const Section = styled.section`
  padding: 48px 0 32px;
  background-image: linear-gradient(${colors.purple500}, ${colors.purple700} );

  ${mediaQuery.tablet`
    padding: 70px 0 40px;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  ${headings.medium(500)}
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  color: ${colors.white};

  ${mediaQuery.tablet`
    margin-bottom: 65px;
  `}
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
`;

export const Item = styled.div`
  width: 100%;
  background: ${colors.lightGray};
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(000, 000, 000, 0.16);
  margin-bottom: 16px;

  ${mediaQuery.tablet`
    width: calc(50% - 30px);
    margin: 0 15px 30px;
  `}

  .shape {
    width: 42px;

    ${mediaQuery.tablet`
      width: 72px;
    `}
  }
`;

export const ItemBox = styled.div`
  width: 117px;
  height: 100%;
  box-shadow: 0px 3px 6px rgba(000, 000, 000, 0.16);
  border-radius: 10px 0 0 10px;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 19px 5px;

  ${mediaQuery.tablet`
    width: 161px;
  `}
`;

export const ItemBoxRight = styled.div`
  padding: 19px 5px;
  flex: 1;
  height: 100%;
  border-radius: 0 10px 10px 0;
  box-shadow: none;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SubTile = styled.h3`
  ${headings.xsmall(400)};
  color: ${colors.white};
  margin-top: 5px;
  text-align: center;

  ${mediaQuery.tablet`
    margin-top: 10px;
  `}
`;

export const Text = styled.p`
  ${body.xlarge(400)};
  color: ${colors.white};
  margin-bottom: 10px;
  text-align: center;

  ${mediaQuery.tablet`
    margin-bottom: 21px;
  `}
`;

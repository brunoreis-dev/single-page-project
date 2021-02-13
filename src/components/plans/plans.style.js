import styled from 'styled-components';
import { headings, body } from '@styles/fonts';
import mediaQuery from '@styles/mediaQuery';
import colors from '@styles/colors'
import Button from '@components/button'

export const Section = styled.section`
  padding: 35px 0 23px;
  background-image: linear-gradient(${colors.purple500}, ${colors.purple700} );

  ${mediaQuery.tablet`
    padding: 63px 0 59px;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .rec-slider-container {
    margin: 0;
  }

  .rec-swipable {
    align-items: center;
  }

  .rec-pagination {
    margin-top: 30px;

    ${mediaQuery.tablet`
      display:none;
    `}
  }

  .rec-dot {
    box-shadow: none;
    border: 1px solid ${colors.green500};
    width: 16px;
    height: 16px;
  }

  .rec-dot_active {
    box-shadow: none;
    background-color: ${colors.green500};
  }
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
  width:100%;

  ${mediaQuery.tablet`
    width: calc(100% + 38px);
  `}
`;

export const Slide = styled.div`
  width: 100%;  
  background: ${colors.lightGray};
  padding: 30px 26px 23px;
  box-shadow: 0px 3px 6px rgba(000, 000, 000, 0.16);
  position: relative;
  overflow:hidden;
  ${mediaQuery.tablet`
    padding: 30px 26px 23px;
  `}
`;

export const SlideBig = styled(Slide)`
  padding: 50px 26px;
`;

export const Plan = styled.p`
  ${body.xlarge(500)};
  color: ${colors.white};
  margin-bottom: 27px;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;

  ${mediaQuery.tablet`
    margin-bottom: 20px;
  `}
`;

export const Price = styled.p`
  ${headings.xmedium(600)};
  color: ${colors.white};
  margin-bottom: 25px;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.green};

  ${mediaQuery.tablet`
    font-size: 20px;
  `}
`;

export const Access = styled.p`
  ${body.large(500)};
  color: ${colors.white};
  text-align: center;
  max-width: 170px;
  margin:0 auto;
  margin-bottom: 20px;
`;

export const AccessBig = styled(Access)`
  font-weight: 700;
`;

export const Text = styled.p`
  ${body.medium(400)};
  color: ${colors.white};
  margin-bottom: 20px;
  text-align: center;

  ${mediaQuery.tablet`
    margin-bottom: 40px;
  `}
`;

export const TextBig = styled(Text)`

  ${mediaQuery.tablet`
    margin-bottom: 20px;
  `}
`;

export const ButtonModified = styled(Button)`
  margin: 0 auto;
  width: 100%;
  max-width: 257px;
`;

export const Band = styled.div`
  ${body.small(400)};
  width: 180px;
  background-color: ${colors.green500};
  color: ${colors.black};
  padding:5px 10px;
  position: absolute;
  right: -55px;
  top: 24px;
  text-align: center;
  transform: rotate(45deg);
`;

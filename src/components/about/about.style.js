import styled from 'styled-components';
import { headings, body } from '@styles/fonts';
import mediaQuery from '@styles/mediaQuery';
import colors from '@styles/colors'

export const Section = styled.section`
  padding: 48px 0 32px;

  ${mediaQuery.tablet`
    padding: 80px 0;
  `}
`;

export const Content = styled.div`
  ${mediaQuery.tablet`
    max-width: 770px;
    margin: 0 auto;
  `}

  .rec-slider-container {
    margin: 0;
  }

  .rec-pagination {
    margin-top: 32px;
  }

  .rec-dot {
    box-shadow: none;
    border: 1px solid ${colors.purple500};
    width: 16px;
    height: 16px;
  }

  .rec-dot_active {
    box-shadow: none;
    background-color: ${colors.purple500};
  }
`;

export const Title = styled.h2`
  ${headings.medium(500)};
  color: ${colors.green500};
  text-align: center;
  margin-bottom: 32px;
  text-transform: uppercase;

  ${mediaQuery.tablet`
    margin-bottom: 53px;
  `}
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${mediaQuery.tablet`
    flex-direction: row;
  `}
`;

export const Box = styled.div`
  max-width: calc(100% - 54px);
  margin: 0 auto;

  ${mediaQuery.tablet`
    max-width: none;
    width: calc(100% - 300px);
    padding: 49px 20px 0 25px;
  `}
`;

export const BoxRight = styled.div`
  margin-bottom: 32px;
  height: 450px;
  overflow: hidden;

  ${mediaQuery.largeMobile`
    height:600px;
  `}

  ${mediaQuery.tablet`
    height:auto;
    max-width: 300px;
    margin-bottom: 0;
  `}
`;


export const Image = styled.img`
  width: 100%;
`;

export const Name = styled.h4`
  ${headings.xmedium(500)};
  color: ${colors.green500};
  margin-bottom: 20px;

  ${mediaQuery.tablet`
    margin-bottom: 14px;
  `}
`;

export const Tag = styled.p`
  ${headings.medium(400)};
  color: ${colors.orange500};
  margin-bottom: 33px;

  ${mediaQuery.tablet`
    margin-bottom: 30px;
    font-size: 22px;
  `}
`;

export const Text = styled.p`
  ${body.xlarge(400)};
  color: ${colors.gray100};
  line-height: 21px;
`;

export const TextMargin = styled(Text)`
  margin-bottom: 20px;
`;

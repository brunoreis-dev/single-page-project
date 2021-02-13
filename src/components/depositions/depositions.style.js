import styled from 'styled-components';
import { headings, body } from '@styles/fonts';
import mediaQuery from '@styles/mediaQuery';
import colors from '@styles/colors'

export const Section = styled.section`
  padding: 32px 0 15px;

  ${mediaQuery.tablet`
    padding: 48px 0 40px;
  `}
`;

export const Content = styled.div`
  .rec-slider-container {
    margin: 0;
  }

  .rec-pagination {
    margin-top: 16px;

    ${mediaQuery.tablet`
      margin-top: 32px;
    `}
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
  ${headings.medium(500)}
  color: ${colors.green500};
  text-align: center;
  margin-bottom: 32px;
  text-transform: uppercase;

  ${mediaQuery.tablet`
    margin-bottom: 50px;
  `}
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Video = styled.div`
  max-width: 480px;
  width: 100%;
  position: relative;
  box-shadow: 0 3px 6px rgba(000,000,000, 0.16);
  height: 500px;

  ${mediaQuery.tablet`
    margin-right: 20px;
  `}

  &:after {
    content: '';
    display: ${({active}) => (active) ? 'none' : 'block'};
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background: rgba(000,000,000, 0.3);
    z-index:1;
  }

  .player-video {
    display: ${({active}) => (active) ? 'block' : 'none'};
    width:100%;
    height: 100% !important;
  }
`;


export const Image = styled.img`
  width: 100%;
  position: relative;
  z-index:1;
  display: ${({active}) => (active) ? 'none' : 'block'};
`;

export const Box = styled.div`
  max-width: calc(100% - 500px);
  margin: 0 auto;
  padding: 24px 48px 45px;
  box-shadow: 0 3px 6px rgba(000,000,000, 0.16);
  display: none;
  border: 1px solid ${colors.purple500};
  

  ${mediaQuery.laptop`
    display: block;
  `}
`;

export const Text = styled.p`
  ${body.large(400)};
  color: ${colors.gray100};
  margin-bottom: 40px;
  position: relative;

  &:before {
    content: '"';
    color: ${colors.green500};
    position: absolute;
    left: 0;
    top:-10px;
    font-size: 54px;
    display: block;
    line-height: 0;
    font-family: sans-serif;
  }

  &:after {
    content: '"';
    color: ${colors.green500};
    position: absolute;
    right: 0;
    bottom:-10px;
    font-size: 54px;
    display: block;
    line-height: 0;
    font-family: sans-serif;
    transform: rotate(180deg);
  }
`;

export const Name = styled.p`
  ${body.large(600)};
  color: ${colors.green500};
  text-transform: uppercase;
  text-align: center;
`;

export const Time = styled.span`
  ${body.medium(400)};
  text-transform: none;
  color: ${colors.orange500};
`;

export const IcoPlay = styled.div`
  display: ${({active}) => (active) ? 'none' : 'block'};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 37px;
  cursor: pointer;
  z-index: 2;
`;

export const IcoCircle = styled.div`
  width:45px;
  margin: 0 auto 42px;
`;  
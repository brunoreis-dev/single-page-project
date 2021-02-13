import { useState } from 'react'
import Player from 'react-player';
import Carousel from 'react-elastic-carousel';
import { Play, Gun1 } from '@components/icons';
import DepositionImage from '@public/images/home/rickandmorty.jpg';
import Container from '@components/container'
import { 
  Section,
  Content,
  Title,
  Text,
  Time,
  Slide,
  Box,
  Video,
  Image,
  Name,
  IcoPlay,
  IcoCircle
 } from './depositions.style';

const Depositions = () => {
  const [play, setPlay] = useState(false);

  function PlayVideo() {
    setPlay(true)
  }
  
  return (
    <Section data-index id="depositions">
      <Container>
        <Content>
          <Title>Depoimentos</Title>
            <Carousel 
            itemsToShow={1}
            showArrows={false}
            itemPadding={[7, 5, 7, 5]}
            >
              <Slide>
                <Video active={play}>
                  <IcoPlay onClick={PlayVideo} active={play}>
                    <Play />
                  </IcoPlay>
                  <Image active={play} src={DepositionImage} alt='Rick'/>
                  <Player
                    active={play}
                    className='player-video'
                    url='https://youtu.be/NpEaa2P7qZI'
                    width='100%'
                    playing={play}
                    controls={true}
                  />
                </Video>
                <Box>
                  <IcoCircle><Gun1 /></IcoCircle>
                  <Text>Estou cançado das babaquices do Morty, ele apenas tinha que seguir o que eu mando.</Text>
                  <Name>Rick <Time>Homem mais brilhante do universo.</Time></Name>
                </Box>
              </Slide>
              <Slide>
                <Video active={play}>
                  <IcoPlay onClick={PlayVideo} active={play}>
                    <Play />
                  </IcoPlay>
                  <Image active={play} src={DepositionImage} alt='Morty'/>
                  <Player
                    active={play}
                    className='player-video'
                    url='https://youtu.be/NpEaa2P7qZI'
                    width='100%'
                    playing={play}
                    controls={true}
                  />
                </Video>
                <Box>
                  <IcoCircle><Gun1 /></IcoCircle>
                  <Text>Estou cançado de ser usado pelo Rick, ele é egoista e muito babaca, eu só queria viver minha vida normal.</Text>
                  <Name>Morty <Time>Neto do homem mais brilhante do universo.</Time></Name>
                </Box>
              </Slide>
          </Carousel> 
        </Content>
      </Container>
    </Section>
  )
}

export default Depositions;
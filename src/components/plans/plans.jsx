import Container from '@components/container';
import Carousel from 'react-elastic-carousel';
import { 
  Section,
  Content,
  Title,
  Text,
  TextBig,
  Box,
  SlideBig,
  Slide,
  ButtonModified,
  Plan,
  Price,
  Access,
  AccessBig,
  Band,
 } from './plans.style';

const Plans = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemPadding: [7, 5, 7, 5]},
    { width: 768, itemsToShow: 3, itemPadding: [7, 19, 7, 19]},
  ]

  return (
    <Section data-index id="plans">
      <Container>
        <Content>
          <Title>Episódios</Title>
          <Box>
            <Carousel
            showArrows={false}
            breakPoints={breakPoints}
            >
              <Slide>
                <Plan>Episódio Mais Visto</Plan>
                <Price>Netflix</Price>
                <Text>Aparentemente esse foi o episódio que a galera mais gostous!</Text>
                <ButtonModified small green>Assista Agora</ButtonModified>
              </Slide>
              <SlideBig>
                <Band>HOT!!!!</Band>
                <Plan>Último Episódio</Plan>
                <Price>Netflix</Price>
                <TextBig>Esse é o episódio mais recente a ser lançado para o público.</TextBig>
                <ButtonModified small green>Veja primeiro</ButtonModified>
              </SlideBig>
              <Slide>
                <Plan>Episódio Mais Comentado</Plan>
                <Price>Netflix</Price>
                <Text>Esse episódio teve várias cenas que deixaram várias perguntas!</Text>
                <ButtonModified small green>Assista Agora</ButtonModified>
              </Slide>
            </Carousel>
          </Box>
        </Content>
      </Container>
    </Section>
  )
}

export default Plans;
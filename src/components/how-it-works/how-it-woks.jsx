import Container from '@components/container';
import { 
  Section,
  Content,
  Title,
  Text,
  Box,
  BoxRight,
  ButtonModified
 } from './how-it-works.style';

const HowItWorks = () => {
  return (
    <Section data-index id="how-it-works">
      <Container>
        <Content>
          <Box>
            <Title>como funciona</Title>
            <Text>São episódios alucinantes e com uma história continua e cada vez você se apaixona mais pelo universo e pelos seus personagens.</Text>
            <Text>O que você está esperando, venha entrar em um portal conosco!!</Text>
            <ButtonModified href="#">quero ver</ButtonModified>
          </Box>
          <BoxRight></BoxRight>
        </Content>
      </Container>
    </Section>
  )
}

export default HowItWorks;
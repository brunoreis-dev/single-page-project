import Container from '@components/container'
import { 
  Section,
  WhatsIsContent,
  Title,
  Text,
  ButtonModified
 } from './what-is.style';

const WhatsIs = () => {
  return (
    <Section data-index id="what-is">
      <Container>
        <WhatsIsContent>
          <Title>Rick and Morty</Title>
          <Text>É um seriado americado dos dois criadores mais loucos de todos os tempos!</Text>
          <Text>Acreditamos que toda essa imaginação veio de muitas horas sem nada para fazer!!! rs</Text>
          <Text>Brincadeiras a parte, hoje esse é um seriado muito popular e conhecido, principalmente pelos jovens e digasse de passagem, uma obra prima!</Text>
          <Text>Venha ver uns episódios.</Text>
          <ButtonModified href="#" >conheça</ButtonModified>
        </WhatsIsContent>
      </Container>
    </Section>
  )
}

export default WhatsIs;
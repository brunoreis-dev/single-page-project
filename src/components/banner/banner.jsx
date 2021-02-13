import Container from '@components/container';
import { 
  Section,
  Title
 } from './banner.style';

const Banner = () => {

  return(
      <Section data-index id="banner">
      <Container>
        <Title>Rick<br /> and<br />Morty!</Title>
      </Container>
    </Section>
  )
}

export default Banner;
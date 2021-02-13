import Container from '@components/container';
import imgLogo from '@public/images/logo.png'
import { 
  Section,
  Content,
  LogoContainer,
  Logo,
  Text
 } from './footer.style';

const Footer = () => {

  return(
    <Section>
      <Container>
        <Content>
          <LogoContainer><Logo src={imgLogo} alt="Entra na Roda" /></LogoContainer>
          <Text>Rick and Morty | 2021</Text>
          <Text>Todos os direitos reservados</Text>
        </Content>
      </Container>
    </Section>
  )
}

export default Footer;
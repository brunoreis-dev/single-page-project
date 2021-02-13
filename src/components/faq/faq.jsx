import Container from '@components/container';
import Faqs from '@components/faq/data'
import Accordeon from '@components/faq-item'
import { 
  Section,
  Content,
  Title,
  Box,
 } from './faq.style';

const Faq = () => {
  const data = Faqs.data

  return(
    <Section data-index id="faq">
      <Container>
        <Content>
          <Title>dúvidas frequentes</Title>
          <Box>
            {data.map(({ question, answer }, i) => (
              <Accordeon key={question} question={question} answer={answer}/>
            ))}
          </Box>
        </Content>
      </Container>
    </Section>
  )
}

export default Faq;
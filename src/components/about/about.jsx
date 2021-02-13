import Carousel from 'react-elastic-carousel';
import ImageRick from '@public/images/home/rick.jpg';
import ImageMorty from '@public/images/home/morty.jpg';
import { 
  Section,
  Content,
  Title,
  Text,
  Slide,
  Box,
  BoxRight,
  Name,
  Tag,
  Image,
  TextMargin
 } from './about.style';

const About = () => {
  const breakPoints = [
    { width: 1, itemPadding: [0, 5, 0 , 0] },
    { width: 768, itemPadding: [0, 0, 0, 0] },
  ]

  return (
    <Section data-index id="about">
      <Content>
        <Title>quem somos</Title>
          <Carousel 
          itemsToShow={1}
          showArrows={false}
          breakPoints={breakPoints}
          >
            <Slide>
              <Box>
                <Name>Rick Sanchez</Name>
                <Tag>Cientista e Homem Mais Inteligente do Universo</Tag>
                <Text>Um grande cientista que fez várias invenções e sua maior invesão foi a arma dimensional.</Text>
              </Box>
              <BoxRight>
                <Image src={ImageRick} alt="Rick" />
              </BoxRight>
            </Slide>
            <Slide>
              <Box>
                <Name>Morty</Name>
                <Tag>Estudante</Tag>
                <Text>Morty é neto do homem mais inteligente do universo e sua burrice serve de escudo para o seu Avô (Rick Sanchez) não ser detectado.</Text>
              </Box>
              <BoxRight>
                <Image src={ImageMorty} alt="Morty" />
              </BoxRight>
            </Slide>
        </Carousel> 
      </Content>
    </Section>
  )
}

export default About;
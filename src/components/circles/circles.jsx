import Container from '@components/container';
import { 
  Gun1,
  Gun2,
  Gun3,
  Gun4,
  Gun5
 } from '@components/icons';
import { 
  Section,
  Content,
  Title,
  Text,
  Box,
  Item,
  ItemBox,
  ItemBoxRight,
  SubTile,
  IconHolder,
 } from './circles.style';

const Circles = () => {
  return (
    <Section data-index id="circles">
      <Container>
        <Content>
          <Title>Armas Utilizadas</Title>
          <Box>
            <Item>
              <ItemBox>
                <IconHolder><Gun1 /></IconHolder>
                <SubTile>Arma Dimensional</SubTile>
              </ItemBox>
              <ItemBoxRight>
                <Text>Arma para aberturas de dimensões.</Text>
              </ItemBoxRight>
            </Item>
            <Item>
              <ItemBox>
                <IconHolder><Gun2 /></IconHolder>
                <SubTile>Arma Frozen</SubTile>
              </ItemBox>
              <ItemBoxRight>
                <Text>Arma de congelamento.</Text>
              </ItemBoxRight>
            </Item>
            <Item>
              <ItemBox>
                <IconHolder><Gun3 /></IconHolder>
                <SubTile>Arma Spark</SubTile>
              </ItemBox>
              <ItemBoxRight>
                <Text>Dispara ondas eletricas.</Text>
              </ItemBoxRight>
            </Item>
            <Item>
              <ItemBox>
                <IconHolder><Gun4 /></IconHolder>
                <SubTile>Arma Laser</SubTile>
              </ItemBox>
              <ItemBoxRight>
                <Text>Dispara lasers mortais.</Text>
              </ItemBoxRight>
            </Item>
            <Item>
              <ItemBox>
                <IconHolder><Gun5 /></IconHolder>
                <SubTile>Arma Misteriosa</SubTile>
              </ItemBox>
              <ItemBoxRight>
                <Text>Não se sabe ao certo o que ela faz.</Text>
              </ItemBoxRight>
            </Item>
          </Box>
        </Content>
      </Container>
    </Section>
  )
}

export default Circles;
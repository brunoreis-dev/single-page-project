import { useState } from 'react'
import { Arrow } from '@components/icons'
import {
  Item,
  ItemBox,
  FaqTitle,
  Ico,
  Text,
 } from './faq-item.style';

const FaqItem = ({ question, answer }) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleAccordeon = () => setIsOpened(!isOpened);

  return(
    <Item>
      <ItemBox onClick={toggleAccordeon}>
        <FaqTitle>{question}</FaqTitle>
        <Ico active={isOpened}><Arrow /></Ico>
      </ItemBox>
      <Text active={isOpened}>{answer}</Text>
    </Item>
  )
}

export default FaqItem;
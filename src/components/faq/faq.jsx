import React from 'react'
import {
  FaqContainer,
  FaqHeading,
  AccordionItem,
  TitleContainer,
  Icon,
  ContentContainer
} from './faq.styles'
import { FaqData } from '../../config/index'

export const Faq = () => {
  const [activeIndex, setActiveIndex] = React.useState(null)
  return (
    <FaqContainer id="FAQ">
      <FaqHeading>FAQs</FaqHeading>
      {FaqData?.map((item) => (
        <AccordionItem key={item.id} isActive={activeIndex === item.id}>
          <TitleContainer
            isActive={activeIndex === item.id}
            onClick={() => setActiveIndex(activeIndex === item.id ? null : item.id)}
          >
            {item.question}
            <Icon isActive={activeIndex === item.id} />
          </TitleContainer>
          <ContentContainer isActive={activeIndex === item.id}>{item.answer}</ContentContainer>
        </AccordionItem>
      ))}
    </FaqContainer>
  )
}

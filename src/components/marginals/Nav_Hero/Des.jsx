import {
  Btn1,
  Btn2,
  BtnCont,
  BtnWrapper,
  InnerSpan,
  DesCont,
  DesPara,
  DesTitle
} from './Des.styles'
import { desContent } from './content/desContent'

const Des = () => {
  return (
    <article>
      <DesCont>
        <DesTitle>{desContent.title}</DesTitle>
        <DesPara>{desContent.content}</DesPara>
        <BtnWrapper>
          <BtnCont>
            <Btn1>
              {desContent.btn1}
              <InnerSpan />
            </Btn1>

            <Btn2>{desContent.btn2}</Btn2>
          </BtnCont>
        </BtnWrapper>
      </DesCont>
    </article>
  )
}

export default Des

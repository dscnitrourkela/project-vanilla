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
import { desContent } from "../../../config/content/desContent";

const Des = () => {
  return (
    
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
    
  )
}

export default Des

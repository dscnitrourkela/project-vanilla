import { Icon1,Icon2,Icon3,Icon4,Icon5,Icon6,SponsorsContainer } from "./sponsors.styles";
import Marquee from "react-fast-marquee";

export const Sponsors=()=>{
    return(
        <SponsorsContainer>
          <Marquee>
            <Icon1/>
            <Icon2/>
            <Icon3/>
            <Icon4/>
            <Icon5/>
            <Icon6/>
          </Marquee>
        </SponsorsContainer>
    )
}
import { Icon,SponsorsContainer } from "./sponsors.styles";
import Marquee from "react-fast-marquee";
import { SponsorsData } from "../../../config/sponsorsdata";

export const Sponsors = () => {

  return (
    <SponsorsContainer>
      <Marquee>
        {SponsorsData.map((data,index ) => (
          <Icon key={index} url={data.url} style={data.styles} />
        ))}
      </Marquee>
    </SponsorsContainer>
  );
};
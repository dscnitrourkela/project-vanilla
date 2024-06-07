import { Icon,SponsorsContainer } from "./sponsors.styles";
import Marquee from "react-fast-marquee";
import { SponsorsData } from "../../config/content/mycomp_data/sponsors";

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
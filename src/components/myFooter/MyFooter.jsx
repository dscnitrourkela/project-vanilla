// import React from "react";
import {
  Footer,
  FooterTop,
  Logos,
  SocialLogo,
  SocialLogoIndv,
  SocialImg,
  MainLogo,
  AicheLogo1,
  AicheLogo2,
  Text,
  Heading,
  List,
  ListItems,
  FooterBottom,
  MadeBy,
  HeartIcon
} from './MyFooter.styles'

import footerData from '../../../config/content/myFooterData'

export default function MyFooter() {
  function renderListItem(item, title) {
    {
      if (typeof item === 'string') {
        if (title === 'Synergicon') {
          return <a href="#">{item}</a>
        } else {
          return item
        }
      } else {
        return `${item.name}:${item.number}`
      }
    }
  }

  return (
    <>
      <Footer>
        <FooterTop>
          <Logos>
            <SocialLogo>
              <SocialLogoIndv>
                {Object.entries(footerData.images.socials).map(([key, url]) => (
                  <a key={key} href="#">
                    <SocialImg src={url} alt={key} />
                  </a>
                ))}
              </SocialLogoIndv>
            </SocialLogo>
            <MainLogo>
              <AicheLogo1 src={footerData.images.aichelogo1} alt="aichelogo1" />
              <AicheLogo2 src={footerData.images.aichelogo2} alt="aichelogo2" />
            </MainLogo>
          </Logos>
          <Text>
            {footerData.text.map((section, index) => (
              <div key={index}>
                <Heading>{section.title}</Heading>
                <List>
                  {section.info.map((item, i) => (
                    <ListItems key={i}>
                      {/* {typeof item === 'string' ? item : `${item.name}:${item.number}`} */}
                      {renderListItem(item, section.title)}
                    </ListItems>
                  ))}
                </List>
              </div>
            ))}
          </Text>
        </FooterTop>
        <FooterBottom>
          {footerData.bottom.map((item, index) => (
            <a key={index} href="#">
              {item}
            </a>
          ))}
          <MadeBy>
            Architected with
            <HeartIcon src={footerData.images.heart} alt="heart" />
            by GDSC NITR Team
          </MadeBy>
        </FooterBottom>
      </Footer>
    </>
  )
}

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
} from './Styles'

import footerData from '../../../config/content/footerData/Footer.js'

export default function MyFooter() {
  function renderListItem(item, title) {
    {
      if (typeof item === 'string') {
        return item
      } else if (title === 'Synergicon') {
        return <a href={item.href}>{item.list}</a>
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
                {footerData.images.socials.map((item) => (
                  <a key={item.key} href={item.href}>
                    <SocialImg src={item.img} alt={item.key} />
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
                    <ListItems key={i}>{renderListItem(item, section.title)}</ListItems>
                  ))}
                </List>
              </div>
            ))}
          </Text>
        </FooterTop>
        <FooterBottom>
          {footerData.bottom.map((item, index) => (
            <a key={index} href={item.href}>
              {item.item}
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

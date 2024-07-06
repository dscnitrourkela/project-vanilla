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
  HeartIcon,
  IframeContainer,
  Iframe,
  PhoneNumberContainer
} from './Styles'

import footerData from '../../../config/content/footerData/Footer.js'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

RenderListItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      href: PropTypes.string,
      list: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number
    })
  ]).isRequired,
  title: PropTypes.string.isRequired
}

export default function MyFooter() {
  function showLocation() {
    toast(
      <IframeContainer>
        <Iframe src={footerData.images.map.src} title={footerData.images.map.title} />
      </IframeContainer>,

      {
        position: 'bottom-right',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: 'dark'
      }
    )
  }

  return (
    <>
      <Footer id="contact">
        <FooterTop>
          <Logos>
            <SocialLogo>
              <SocialLogoIndv>
                {footerData.images.socials.map((item) => (
                  <a key={item.key} href={item.href}>
                    <SocialImg src={item.img} alt={item.key} />
                  </a>
                ))}
                <a>
                  <SocialImg
                    onClick={showLocation}
                    src={footerData.images.location.img}
                    alt={footerData.images.location.key}
                  ></SocialImg>
                </a>
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
                      <RenderListItem item={item} title={section.title} />
                    </ListItems>
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
            <a href="https://dscnitrourkela.org/">by GDSC NITR Team</a>
          </MadeBy>
        </FooterBottom>
      </Footer>
    </>
  )
}

function RenderListItem({ item, title }) {
  {
    if (title === 'Email Us') {
      return <a href={`mailto:${item}`}>{item}</a>
    } else if (title === 'Sthitivartana') {
      return <a href={item.href}>{item.list}</a>
    } else {
      return (
        <div className="">
          <PhoneNumberContainer>
            <div>{item.name}:</div>
            <div>{item.number}</div>
          </PhoneNumberContainer>
        </div>
      )
    }
  }
}

import styled from 'styled-components'
import tw from 'twin.macro'

export const Footer = styled.div`
  ${tw`
    h-[774px] custom:h-[483px] bg-brown-4 font-Poppins flex flex-col justify-between  
  `}
`

export const FooterTop = styled.div`
  ${tw`
    px-[24px] pt-[23px] pb-[49px] custom:h-[400.3px] custom:px-[39px] custom:py-[64px] flex justify-between flex-col gap-[47px] custom:flex-row custom:gap-[0px]
  `}
`

export const Logos = styled.div`
  ${tw`
    h-[129.15px] custom:h-[306px] custom:w-[461.44px] mt-[10px] custom:mt-0 flex-col text-brown-2 order-2 custom:order-1  
  `}
`

export const SocialLogo = styled.div`
  ${tw`
    h-[48px] custom:mb-[146px]
  `}
`

export const SocialLogoIndv = styled.div`
  ${tw`
    w-[105px] h-[21.98px] custom:w-[229.37px] custom:h-[48px] flex justify-between items-center gap-[5.7px] custom:gap-[12.45px]
  `}
`

export const SocialImg = styled.img`
  ${tw`
    h-[21px] w-[21px] custom:h-[48px] custom:w-[48px]
  `}
`

export const MainLogo = styled.div`
  ${tw`
    h-[67.16px] w-[262.04px] custom:h-[112.38px] custom:w-full flex items-end gap-[20.32px] custom:gap-[57px]
  `}
`

export const AicheLogo1 = styled.img`
  ${tw`
    w-[161.71px] h-[44.44px] custom:w-[270.58px] custom:h-[74.36px]
  `}
`

export const AicheLogo2 = styled.img`
  ${tw`
    w-[80px] h-[67.16px] custom:w-133.86 custom:h-[112.38px]
  `}
`

export const Text = styled.div`
  ${tw`
    flex flex-col custom:flex-row gap-[45px] custom:gap-[122px] justify-between h-[472px] customSmall:w-[382px] custom:h-[306px] custom:w-[853.83px] order-1 custom:order-2 tracking-widest
  `}
`

export const Heading = styled.h4`
  ${tw`
    mb-[16px] custom:mb-[32px] text-brown-3 font-semibold text-[17px] custom:text-[32px] 
  `}
`

export const List = styled.ul`
  ${tw`
    text-[12px] custom:text-[18px] font-medium text-brown-2
  `}
`

export const ListItems = styled.li`
  ${tw`
    mb-[16px]
  `}
  &:last-child {
    ${tw`mb-0`}
  }
`

export const FooterBottom = styled.div`
  ${tw`
    px-[12px] custom:px-[34px] py-[2px] custom:py-[27.65px] h-[32px] custom:h-[82.7px] flex gap-[9px] custom:gap-[41px] bg-brown-5 text-brown-1 items-center justify-evenly custom:justify-start text-[7.5px] customSmall:text-[9px] custom:text-[18px] font-medium
  `}
`

export const MadeBy = styled.p`
  ${tw`
    flex justify-center items-center gap-[2px] custom:gap-[4px]
  `}
`

export const HeartIcon = styled.img`
  ${tw`
    w-[9.88px] h-[9.88px] custom:w-[18px] custom:h-[18px]
  `}
`

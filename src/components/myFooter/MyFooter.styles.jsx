import styled from 'styled-components'
import tw from 'twin.macro'

export const Footer = styled.div`
  ${tw`
    h-[774px] brk-12:h-[283px] brk-10:h-[299.5px] brk-1:h-[483px] bg-brown-4 font-Poppins flex flex-col justify-between  
  `}
`

export const FooterTop = styled.div`
  ${tw`
    px-[24px] pt-[23px] pb-[49px] brk-12:h-[265.5px] brk-1:h-[400.3px] brk-2:px-[39px] brk-1:py-[48px] brk-2:py-[64px] flex justify-between flex-col gap-[47px] brk-12:flex-row brk-12:gap-[0px]
  `}
`

export const Logos = styled.div`
  ${tw`
    h-[129.15px] brk-2:h-[306px] brk-2:w-[461.44px] mt-[10px] brk-12:mt-0 flex-col text-brown-2 order-2 brk-12:order-1  
  `}
`

export const SocialLogo = styled.div`
  ${tw`
    h-[48px] brk-1:mb-[146px]
  `}
`

export const SocialLogoIndv = styled.div`
  ${tw`
    w-[105px] h-[21.98px] brk-1:w-[229.37px] brk-1:h-[48px] flex justify-between items-center gap-[5.7px] brk-2:gap-[12.45px]
  `}
`

export const SocialImg = styled.img`
  ${tw`
    h-[21px] w-[21px] brk-1:h-[48px] brk-1:w-[48px]
  `}
`

export const MainLogo = styled.div`
  ${tw`
    h-[67.16px] w-[262.04px] brk-2:h-[112.38px] brk-2:w-full flex items-end gap-[20.32px] brk-12:gap-[15.5px] brk-2:gap-[57px]
  `}
`

export const AicheLogo1 = styled.img`
  ${tw`
    w-[161.71px] h-[44.44px] brk-12:w-[150px] brk-12:h-[41.21px] brk-1:w-[230.58px] brk-1:h-[63.38px] brk-2:w-[270.58px] brk-2:h-[74.36px]
  `}
`

export const AicheLogo2 = styled.img`
  ${tw`
    w-[80px] h-[67.16px] brk-12:w-[75px] brk-12:h-[62.26px] brk-1:w-[110.86px] brk-1:h-[93.07px] brk-2:w-[133.86px] brk-2:h-[112.38px]
  `}
`

export const Text = styled.div`
  ${tw`
    flex flex-col brk-12:flex-row gap-[45px] brk-12:gap-[20px] brk-10:gap-[50px] brk-1:gap-[122px] justify-between h-[472px] brk-11:w-[382px] brk-12:h-auto brk-12:w-auto brk-1:h-[306px] brk-1:w-[853.83px] order-1 brk-12:order-2 tracking-widest
  `}
`

export const Heading = styled.h4`
  ${tw`
    mb-[16px] brk-1:mb-[32px] text-brown-3 font-semibold text-[17px] brk-12:text-[15px] brk-10:text-[20px] brk-1:text-[32px] 
  `}
`

export const List = styled.ul`
  ${tw`
    text-[12px] brk-12:text-[10px] brk-10:text-[12.5px] brk-1:text-[18px] font-medium text-brown-2
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
    px-[12px] brk-1:px-[34px] py-[2px] brk-1:py-[27.65px] h-[32px] brk-10:h-[34px] brk-1:h-[82.7px] flex gap-[9px] brk-1:gap-[41px] brk-10:gap-[18px] bg-brown-5 text-brown-1 items-center justify-evenly brk-12:justify-start text-[7.5px] brk-11:text-[9px] brk-1:text-[18px] font-medium
  `}
`

export const MadeBy = styled.p`
  ${tw`
    flex justify-center items-center gap-[2px] brk-1:gap-[4px]
  `}
`

export const HeartIcon = styled.img`
  ${tw`
    w-[9.88px] h-[9.88px] brk-1:w-[18px] brk-1:h-[18px]
  `}
`

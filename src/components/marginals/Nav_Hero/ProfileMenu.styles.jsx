import tw from 'twin.macro'
import styled from 'styled-components'
export const ProfileMenuButton = styled.button`
  ${tw`
  flex
  items-center
  justify-center
  bg-[#151515]
  text-[#FFEEDA]
  rounded-full
  w-[45px]
  h-[45px]
  cursor-pointer
  font-Poppins
  `}
`
export const Container = styled.div`
  ${tw`px-5`}
`

export const ProfileDropDown = styled.div`
  ${tw`
  fixed
  z-[999]
  1.4lg:top-[6rem]
  1.4lg:right-[0.9rem]
  w-[300px]
  bg-[#402e32]
  pt-10
  pb-5
  font-[500]
  flex 
  flex-col
  gap-2
  px-5
  w-full
  max-w-[300px]
  0.6xxsm:max-w-[350px]
  0.5xsm:max-w-[400px]
  `}
  border : 2px solid #000;
  border-radius: 14px;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0);

  &::before {
    content: '';
    position: absolute;
    top: -19px;
    right: 20px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #402e32 transparent;
  }

  @media (max-width: 1090px) {
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    position: fixed;
    &::before {
      content: none;
    }
  }
`
export const CloseButton = styled.button`
  ${tw`
  absolute
  top-3
  right-3
  duration-300
  active:scale-50
  rounded-full
  w-[30px]
  h-[30px]
  cursor-pointer
  font-Poppins
  1.4lg:hidden
  `}
`
export const ProfileDropDownItem = styled.div`
  ${tw`
  text-lg
  text-brown-2
  cursor-pointer
  font-Poppins
  font-[500]
  `}
`
export const NotRegistered = styled.div`
  ${tw`
  text-lg
  bg-[#1D1D1D]
  text-[#FFEEDA]
  rounded-md
  py-2
  px-4
  font-Poppins
  font-[500]
  text-center
  hover:bg-[#FFEEDA]
  hover:text-[#1D1D1D]
  active:scale-95
  duration-300
  ease-in-out
  `}
`

export const Label = styled.label`
  ${tw`
  text-brown-2
  capitalize
  `}
`
export const Value = styled.label`
  ${tw`
  text-orange-1
  
  `}
`
export const LogoutButton = styled.button`
  ${tw`
  mt-5
  bg-[#1D1D1D]
  text-[#FFEEDA]
  rounded-md
  py-2
  px-4
  cursor-pointer
  font-[500]
  font-Poppins
  duration-300
  ease-in-out
  hover:bg-[#FFEEDA]
  hover:text-[#1D1D1D]
  active:scale-95
  `}
`
export const PaymentButton = styled.button`
  ${tw`
  mt-5
  bg-orange-1
  text-[#FFEEDA]
  rounded-md
  py-2
  px-4
  cursor-pointer
  font-[500]
  font-Poppins
  duration-300
  ease-in-out
  hover:bg-[#FFEEDA]
  hover:text-[#1D1D1D]
  active:scale-95
  `}
`
export const LoaderContainer = styled.div`
  ${tw`
  flex
  items-center
  justify-center
  mb-5
  `}
`

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
  `}
`

export const ProfileDropDown = styled.div`
  ${tw`
  absolute
  top-20
  right-7
  w-[300px]
  bg-[#402e32]
  rounded-md
  shadow-lg
  py-5
  font-[500]
  grid
  place-items-center
  `}
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #402e32 transparent;
  }
`
export const ProfileDropDownItem = styled.div`
  ${tw`
  p-2
  text-brown-2
  cursor-pointer
  // hover:bg-[#1D1D1D]
  `}
`

export const Label = styled.label`
  ${tw`
  text-brown-2
  `}
`
export const Value = styled.label`
  ${tw`
  text-orange-1
  
  `}
`
export const LogoutButton = styled.button`
  ${tw`
  bg-[#1D1D1D]
  text-[#FFEEDA]
  rounded-md
  py-2
  px-4
  cursor-pointer
  `}
`

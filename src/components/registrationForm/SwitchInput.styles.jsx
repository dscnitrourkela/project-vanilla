import tw from 'twin.macro'
import styled from 'styled-components'

export const SwitchContainer = styled.section`
  ${tw`flex items-center justify-start w-full gap-4 mt-5`}
`

export const SwitchCheckbox = styled.input`
  ${tw`hidden`}

  &:checked + label span {
    ${tw`translate-x-full`}
  }
`

export const SwitchLabel = styled.label`
  ${tw`flex items-center cursor-pointer p-1 bg-gray-300 rounded-full w-12 h-6 relative transition duration-300 ease-in-out`}
  ${SwitchCheckbox}:checked + & {
    ${tw`bg-orange-1`}
  }
`

export const SwitchButton = styled.span`
  ${tw`bg-white-1 w-5 h-5 rounded-full shadow-md transform transition duration-300 ease-in-out`}
`

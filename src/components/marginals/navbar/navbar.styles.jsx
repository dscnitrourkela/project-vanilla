import tw from 'twin.macro'
import styled from 'styled-components'

export const NavContainer = styled.nav`
  ${tw`
        flex
        flex-row
        justify-center
        items-center
        bg-blue-500
    `}
`
export const Items = styled.li`
  ${tw`
        p-[1vw]
        cursor-pointer
        w-[8vw]
        list-none
    `}
`

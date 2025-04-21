import styled, { css } from 'styled-components'
// import CrossSvg from 'images/cross.svg?react'
// import Control1Svg from 'images/control-1.svg?react'
// import Control2Svg from 'images/control-2.svg?react'
// import Control3Svg from 'images/control-3.svg?react'
import { Breakpoints } from '@tokens'

const CrossSvg = 'images/cross.svg'
const Control1Svg = 'images/control-1.svg'
const Control2Svg = 'images/control-2.svg'
const Control3Svg = 'images/control-3.svg'

export const Container = styled.div<{ $visible: boolean }>`
  position: absolute;
  width: 315rem;
  top: -12rem;
  left: 16rem;
  border: 1rem solid #75a1ff;
  border-radius: 6rem;
  padding: 10rem 10rem 30rem 20rem;
  width: 315rem;
  backdrop-filter: blur(15rem);
  box-shadow: 0 25rem 35rem 0 rgba(0, 0, 0, 0.35);
  background: rgba(12, 14, 15, 0.8);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;

  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      pointer-events: all;
    `}

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    left: 50%;
    transform: translateX(-75%);
    top: 9rem;
    padding: 10rem 3rem 30rem 25rem;
  }
`
export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`

export const CloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  width: 33rem;
  height: 33rem;
  margin-left: auto;
`
export const List = styled.ul``
export const ListItem = styled.li`
  display: flex;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14rem;
  line-height: 126%;
  color: #fff;
  margin-bottom: 20rem;
  & a {
    color: #1eeeae;
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const CrossImg = styled(CrossSvg)``

export const Control1Img = styled(Control1Svg)`
  width: 40rem;
  min-width: 40rem;
  height: auto;
  margin-right: 15rem;
`
export const Control2Img = styled(Control2Svg)`
  width: 40rem;
  min-width: 40rem;
  height: auto;
  margin-right: 15rem;
`
export const Control3Img = styled(Control3Svg)`
  width: 40rem;
  min-width: 40rem;
  height: auto;
  margin-right: 15rem;
`

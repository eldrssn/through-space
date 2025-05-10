import styled from 'styled-components'

import PlusSvg from '@images/plus-black.svg'
import MinusSvg from '@images/minus-black.svg'
import { Breakpoints, Colors } from '@tokens'

export const Container = styled.div`
  position: absolute;
  bottom: 70rem;
  left: 50%;
  translate: -50%;
  display: flex;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    top: 128rem;
    height: 41rem;
  }
`
export const Button = styled.button`
  border-radius: 4rem;
  background: ${Colors.GREEN};
  box-shadow: 0 22rem 45rem 0 rgba(0, 0, 0, 0.35);
  width: 39rem;
  height: 39rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition:
    box-shadow 0.2s,
    background 0.2s;

  &:hover {
    background: ${Colors.LIGHT_GREEN};
  }

  &:first-child {
    margin-right: 18rem;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 41rem;
    height: 41rem;

    &:first-child {
      margin-right: 15rem;
    }
  }
`

export const PlusImg = styled(PlusSvg)`
  width: 27rem;
  height: 27rem;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 19rem;
    height: 19rem;
  }
`
export const MinusImg = styled(MinusSvg)`
  width: 26rem;
  height: 3rem;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 18rem;
    height: 2rem;
  }
`

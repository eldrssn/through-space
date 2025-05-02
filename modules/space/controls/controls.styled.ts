import styled from 'styled-components'

import PlusSvg from '@images/plus-black.svg'
import MinusSvg from '@images/minus-black.svg'
import { Breakpoints } from '@tokens'

export const Container = styled.div`
  position: absolute;
  height: 59rem;
  top: 150rem;
  left: 50%;
  translate: -50%;
  display: flex;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    top: 128rem;
    height: 41rem;
  }
`
export const Button = styled.button`
  border-radius: 11rem;
  background: #1eeeae;
  border: 1.79rem solid #1eeeae;
  box-shadow: 0 22rem 45rem 0 rgba(0, 0, 0, 0.35);
  width: 59rem;
  height: 59rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition:
    box-shadow 0.2s,
    background 0.2s;

  &:hover {
    box-shadow:
      0 22rem 45rem 0 rgba(0, 0, 0, 0.35),
      0 2rem 12rem 0 rgba(30, 238, 174, 0.55);
    background: #4affc7;
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

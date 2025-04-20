import { Breakpoints } from '@tokens'
import styled from 'styled-components'

export const Wrapper = styled.header`
  height: 95rem;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    height: 60rem;
    padding: 0 20rem;
  }
`
export const Container = styled.div`
  margin: auto;
  width: 1376rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 100%;
  }
`
export const Link = styled.a`
  display: flex;
  align-items: center;
  height: 35rem;
  &:last-of-type {
    height: 25rem;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 60rem;
    height: 21rem;

    &:last-of-type {
      width: 102rem;
      height: 15rem;
    }
  }
`
export const LogoImg = styled.img`
  height: 100%;
`

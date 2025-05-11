import styled, { keyframes } from 'styled-components'

import OrgbitSvg from '@images/animated-planets/orbit.svg'

const planet = '/images/animated-planets/planet-1.png'

import { Breakpoints } from '@tokens'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background: #121517;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Orbit = styled(OrgbitSvg)`
  height: auto;
  width: 100%;
`

export const OrbitBox = styled.div`
  position: absolute;
  left: 50%;
  translate: -50%;
  animation: ${rotate} 60s linear infinite;
  transform-origin: center;
`
export const OrbitBox1 = styled(OrbitBox)`
  width: 384rem;
  animation-duration: 30s;
  rotate: -60deg;

  & svg:first-child {
    opacity: 0.35;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 195rem;
  }
`

export const Planet1 = styled.div`
  background: ${`url("${planet}") center no-repeat`};
  background-size: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 50%;
  width: 41rem;
  height: 41rem;
  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 20rem;
    height: 20rem;
  }
`

export const Procents = styled.span``

export const ProcentsWrap = styled.p`
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #696a6a;
  position: absolute;
  top: 50%;
  right: 50%;
  translate: 50% -50%;
  z-index: 1;
`

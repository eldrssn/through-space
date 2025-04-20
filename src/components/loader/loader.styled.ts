import styled, { keyframes } from 'styled-components'
import bg from '@images/preloader.svg'
import sun from '@images/sun-load.png'
import noise from '/images/noise.png'
import PlanetSvg1 from '@images/animated-planets/planet-5.svg?react'
import OrgbitSvg from '@images/animated-planets/orbit.svg?react'

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
  background: #121517 ${`url("${bg}") center no-repeat`};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    display: block;
    width: 300rem;
    height: 300rem;
    background: ${`url("${sun}") top no-repeat`};
    background-size: cover;
    position: absolute;
  }

  &::before {
    content: '';
    background: ${`url("${noise}") center repeat`};
    opacity: 0.15;
    z-index: 100;

    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`

export const Orbit = styled(OrgbitSvg)`
  height: auto;
  width: 100%;
`

export const OrbitBox = styled.div`
  position: absolute;
  left: 50%;
  translate: -50%;
  animation: ${rotate} 60s linear infinite; // Добавляем анимацию вращения
  transform-origin: center; // Убедимся, что вращение происходит вокруг центра
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

export const Planet1 = styled(PlanetSvg1)`
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 70%;
  width: 41rem;
  height: 69rem;
  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 12rem;
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

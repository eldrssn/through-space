import styled from 'styled-components'
import bg from '/images/bg.svg'
import bgMobile from '/images/bg-mobile.svg'
import sun from '/images/sun.png'
import sunMobile from '/images/sun-mobile.png'
import noise from '/images/noise.png'
import { Breakpoints } from '@tokens'

export const Main = styled.main`
  background: ${`url("${bg}") center no-repeat`};
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    background: ${`url("${sun}") center no-repeat`};
    background-size: cover;
    position: absolute;
    top: 0;
    left: 50%;
    translate: -50%;
    width: 1296rem;
    height: 662rem;
    pointer-events: none;
  }
  &::before {
    content: '';
    background: ${`url("${noise}") center repeat`};
    opacity: 0.15;
    z-index: 100;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    pointer-events: none;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    background: ${`url("${bgMobile}") top no-repeat`};
    background-size: cover;

    &::after {
      background: ${`url("${sunMobile}") center no-repeat`};
      background-size: cover;
      width: 300px;
      height: 154px;
    }
  }
`

export const Wrapper = styled.div``

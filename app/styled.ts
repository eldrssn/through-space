import styled from 'styled-components'
import { Breakpoints } from '@tokens'

const bg = '/images/bg.svg'
const bgMobile = '/images/bg-mobile.svg'

const sun = '/images/sun.png'
const sunMobile = '/images/sun-mobile.png'
const noise = '/images/noise.png'

export const Main = styled.main`
  background: ${`url("${bg}") center no-repeat`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: calc(100 * var(--vh));
  height: 100%;

  &::after {
    content: '';
    background: ${`url("${sun}") center no-repeat`};
    background-size: cover;
    position: absolute;
    top: 30%;
    left: 50%;
    translate: -50% -50%;
    width: 896rem;
    height: 896rem;
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

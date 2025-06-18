import Image from 'next/image'
import styled from 'styled-components'

import { Breakpoints } from '@tokens'

const stars = '/images/stars.svg'

const sun = '/images/sun.png'
const noise = '/images/noise.png'

export const Main = styled.main`
  background: ${`url("${stars}") center repeat`};
  background-size: contain;

  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
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
    background-size: 35rem;
    z-index: 100;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    &::after {
      width: 300rem;
      height: 300rem;
      top: 320rem;
    }
  }
`

export const ImageBackground = styled(Image)`
  filter: blur(15px);

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    object-fit: cover;
  }
`

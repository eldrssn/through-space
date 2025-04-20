import styled from 'styled-components'

import { Breakpoints } from '@tokens'

export const SpaceContainer = styled.div`
  position: relative;
  overflow: hidden;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  padding-top: 20rem;
  width: 100%;
  height: 900rem;
  z-index: 1;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    height: 720rem;
  }
`
export const MapWrapper = styled.div`
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 3%,
    rgba(0, 0, 0, 1) 7%,
    rgba(0, 0, 0, 1) 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 3%,
    rgba(0, 0, 0, 1) 7%,
    rgba(0, 0, 0, 1) 100%
  );
`

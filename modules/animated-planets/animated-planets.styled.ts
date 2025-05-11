import styled, { keyframes } from 'styled-components'

import OrgbitSvg from '@images/animated-planets/orbit.svg'

const planetSvg1 = '/images/animated-planets/planet-5.png'
const planetSvg2 = '/images/animated-planets/planet-4.png'
const planetSvg3 = '/images/animated-planets/planet-2.png'
const planetSvg4 = '/images/animated-planets/planet-1.png'
const planetSvg5 = '/images/animated-planets/planet-3.png'
const sputnikImg = '/images/animated-planets/sputnik.png'

import { Breakpoints } from '@tokens'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Planet1 = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 50%;
  rotate: -10deg;
  width: 41rem;
  height: 41rem;
  background: ${`url("${planetSvg1}") center no-repeat`};
  background-size: contain;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 20rem;
    height: 20rem;
  }
`

export const Planet2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 50%;
  width: 90rem;
  height: 90rem;
  background: ${`url("${planetSvg2}") center no-repeat`};
  background-size: contain;
  rotate: -30deg;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 26rem;
    height: 26rem;
  }
`
export const Planet3 = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 50%;
  width: 179rem;
  height: 179rem;
  rotate: -10deg;

  background: ${`url("${planetSvg3}") center no-repeat`};
  background-size: contain;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 52rem;
    height: 52rem;
  }
`

export const Planet4 = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 50%;
  width: 133rem;
  height: 133rem;
  background: ${`url("${planetSvg4}") center no-repeat`};
  background-size: contain;
  rotate: -20deg;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 38rem;
    height: 38rem;
  }
`

export const Planet5 = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 50%;
  width: 254rem;
  height: 254rem;
  background: ${`url("${planetSvg5}") center no-repeat`};
  background-size: contain;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 74rem;
    height: 74rem;
  }
`

export const Wrapper = styled.div`
  height: 1400rem;
  width: 100%;
  position: absolute;
  top: 30%;
  left: 0;
  pointer-events: none;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    top: 320rem;
    height: calc(140 * var(--vh));
  }
`

export const OrbitBox = styled.div`
  position: absolute;
  left: 50%;
  translate: -50% -50%;
  animation: ${rotate} 60s linear infinite;
  transform-origin: center;
`

export const OrbitBox1 = styled(OrbitBox)`
  width: 672rem;
  animation-duration: 30s;
  rotate: -60deg;

  & svg:first-child {
    opacity: 0.35;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 195rem;
  }
`

export const OrbitBox2 = styled(OrbitBox)`
  width: 968rem;
  animation-duration: 40s;
  animation-direction: reverse;
  rotate: 140deg;
  & svg:first-child {
    opacity: 0.2;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 383rem;
  }
`

export const OrbitBox3 = styled(OrbitBox)`
  width: 1324rem;
  animation-duration: 60s;
  rotate: 170deg;
  & svg:first-child {
    opacity: 0.15;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 280rem;
  }
`

export const OrbitBox4 = styled(OrbitBox)`
  width: 1736rem;
  animation-duration: 70s;
  animation-direction: reverse;
  rotate: 140deg;

  & > svg:first-child {
    opacity: 0.1;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 450rem;
    rotate: 60deg;
  }
`

export const OrbitBox5 = styled(OrbitBox)`
  width: 2144rem;
  animation-duration: 120s;
  rotate: -40deg;

  & svg:first-child {
    opacity: 0.05;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 505rem;
  }
`

export const Orbit = styled(OrgbitSvg)`
  height: auto;
  width: 100%;
`

export const SputnikBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 50%;
  width: 50rem;
  height: 120rem;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 30rem;
    height: 30rem;
  }
`
export const Spitnik = styled.span`
  display: block;
  position: absolute;
  bottom: -100%;
  left: -100%;
  width: 60rem;
  height: 60rem;
  background: ${`url("${sputnikImg}") center no-repeat`};
  background-size: cover;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 20rem;
    height: 20rem;
  }
`

export const SputnikBox1 = styled(SputnikBox)`
  animation: ${rotate} 35s linear infinite;
  /* animation-direction: reverse; */
`
export const Spitnik1 = styled(Spitnik)``

export const SputnikBox2 = styled(SputnikBox)`
  animation: ${rotate} 30s linear infinite;
  animation-direction: reverse;
  width: 40rem;
  height: 40rem;
  transform-origin: 20% 20%;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 20rem;
    height: 20rem;
  }
`
export const Spitnik2 = styled(Spitnik)`
  width: 30rem;
  height: 30rem;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 9rem;
    height: 9rem;
  }
`

export const SputnikBox3 = styled(SputnikBox)`
  bottom: 0;
  right: 50%;
  left: unset;
  animation: ${rotate} 30s linear infinite;
  animation-direction: reverse;
  width: 40rem;
  height: 40rem;
  transform-origin: 20% 20%;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 10rem;
    height: 10rem;
  }
`
export const Spitnik3 = styled(Spitnik)`
  width: 20rem;
  height: 20rem;
  bottom: unset;
  top: -100%;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 6rem;
    height: 6rem;
  }
`

export const SputnikBox4 = styled(SputnikBox)`
  bottom: 0;
  right: 50%;
  left: unset;
  bottom: unset;
  animation: ${rotate} 30s linear infinite;
  animation-direction: reverse;
  width: 50rem;
  height: 50rem;
  transform-origin: 50% 20%;
  width: 12rem;
  height: 12rem;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 10rem;
    height: 10rem;
  }
`
export const Spitnik4 = styled(Spitnik)`
  width: 15rem;
  height: 15rem;
  bottom: unset;
  top: 100%;
  left: 100%;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 4rem;
    height: 4rem;
  }
`

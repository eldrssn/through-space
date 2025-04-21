import styled from 'styled-components'
import ArrowDownImg from '@images/arrow-down.svg'
import { Breakpoints } from '@tokens'

// const ArrowDownImg = '@images/arrow-down.svg'

export const Wrapper = styled.section`
  margin: 282rem 0 20rem;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    margin: 200rem 0 5rem;
  }
`
export const Conteiner = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1112rem;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 100%;
  }
`
export const Header = styled.h1`
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 70rem;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin-bottom: 50rem;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 28rem;
    line-height: 126%;
    color: #fff;
    max-width: 320rem;
    margin-bottom: 25rem;
  }
`
export const Description = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24rem;
  text-align: center;
  color: #fff;
  margin: 0 101rem 40rem;
  line-height: 125%;

  a {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #1eeeae;
    opacity: 1;
    transition: 0.5s ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    font-weight: 400;
    font-size: 16rem;
    text-align: center;
    margin: 0 20rem 30rem;
  }
`
export const PrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3rem solid #1eeeae;
  border-radius: 12rem;
  padding: 20rem 50rem;
  width: 392rem;
  height: 73rem;
  box-shadow: 0 2rem 12rem 0 rgba(30, 238, 174, 0.55);
  background: #1eeeae;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18rem;
  color: #1b1f22;
  margin-bottom: 25rem;
  cursor: pointer;
  transition:
    box-shadow 0.2s,
    background 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow:
      0 2rem 12rem 0 rgba(30, 238, 174, 0.55),
      0 2rem 12rem 0 rgba(30, 238, 174, 0.55);
    background: #4affc7;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 292rem;
    height: 63rem;
    padding: 20rem 40rem;
    margin-bottom: 14rem;
  }
`
export const UnderlinedButton = styled.button`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16rem;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-align: center;
  color: #1eeeae;
  background: transparent;
  cursor: pointer;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 14rem;
  }
`
export const DownButton = styled.button`
  background: transparent;
  cursor: pointer;
`

export const ArrowDown = styled(ArrowDownImg)`
  width: 59rem;
  height: 59rem;
`

export const RulesWrapper = styled.div`
  position: relative;
  margin-bottom: 70rem;
  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    margin-bottom: 30rem;
  }
`

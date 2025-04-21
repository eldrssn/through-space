import styled from 'styled-components'

import { Breakpoints } from '@tokens'

const decor = 'images/decor.svg'

export const Wrapper = styled.article`
  display: flex;
  width: 467rem;
  height: 615rem;
  flex-direction: column;
  position: absolute;
  top: 55%;
  left: 50%;
  translate: -50% -50%;
  z-index: 999;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 63rem;
    height: 118rem;
    background-image: ${`url("${decor}")`};
    background-size: cover;
    pointer-events: none;
  }

  &::before {
    top: -14rem;
    left: -14rem;
  }
  &::after {
    bottom: 70rem;
    right: 11rem;
    transform: rotate(180deg);
  }
  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 336rem;
    height: 488rem;

    &::before,
    &::after {
      width: 63rem;
      height: 118rem;
    }

    &::before {
      left: -2rem;
    }

    &::after {
      right: 0;
      bottom: 75rem;
    }
  }
`
export const TitleWrapper = styled.div`
  border: 1rem solid #1eeeae;
  border-radius: 6rem;
  padding: 18rem 31rem 13rem;
  height: 74rem;
  width: 443rem;
  backdrop-filter: blur(15rem);
  -webkit-backdrop-filter: blur(15rem);
  box-shadow: 0 25rem 35rem 0 rgba(0, 0, 0, 0.35);
  background: rgba(12, 14, 15, 0.8);
  margin-bottom: 10rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 311rem;
    margin: 0 auto 10rem;
    padding: 18rem 20rem 13rem;
  }
`
export const Title = styled.h3`
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 18rem;
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300rem;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 222rem;

    margin-bottom: 6rem;
  }
`
export const UserName = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16rem;
  line-height: 100%;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300rem;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  right: 14rem;
  transform: translateY(-50%);
  color: #1eeeae;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
`
export const ImageWrapper = styled.div`
  width: 443rem;
  border: 1rem solid #1eeeae;
  border-radius: 6rem;
  overflow: hidden;
  margin-bottom: 14rem;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 311rem;
    margin: 0 auto 17rem;
  }
`
export const Image = styled.img`
  width: 443rem;
  height: 443rem;
  pointer-events: none;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 311rem;
    height: 311rem;
  }
`

export const CopyInput = styled.input`
  display: none;
`

export const CopyLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3rem solid #1eeeae;
  border-radius: 12rem;
  width: 300rem;
  height: 60rem;
  box-shadow: 0 2rem 12rem 0 rgba(30, 238, 174, 0.55);
  background: #1eeeae;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18rem;
  line-height: 100%;
  color: #1b1f22;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    box-shadow:
      0 2rem 12rem 0 rgba(30, 238, 174, 0.55),
      0 2rem 12rem 0 rgba(30, 238, 174, 0.55);
    background: #4affc7;
  }

  svg {
    margin-left: 10rem;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 311rem;
  }
`

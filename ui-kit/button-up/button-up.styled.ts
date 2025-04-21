import styled, { css } from 'styled-components'
// import ArrowUpSvg from 'images/arrow-up.svg?react'
import { Breakpoints } from '@tokens'

const ArrowUpSvg = 'images/arrow-up.svg'

export const ButtonUpStyled = styled.button<{ $visible: boolean }>`
  all: unset;
  position: fixed;
  right: 272rem;
  bottom: 49rem;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1.79rem solid #1eeeae;
  border-radius: 12rem;
  padding: 5rem 5rem 5rem 15rem;
  width: 97rem;
  height: 34rem;
  box-shadow: 0 6rem 12rem 0 rgba(0, 0, 0, 0.35);
  background: #121517;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14rem;
  color: #1eeeae;

  &:hover {
    box-shadow:
      0 6rem 12rem 0 rgba(0, 0, 0, 0.35),
      0 2rem 12rem 0 rgba(30, 238, 174, 0.55);
  }

  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      pointer-events: all;
    `}

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    right: 20rem;
    bottom: 104rem;
    padding: 5rem;
    width: 85rem;
    height: 22rem;
    font-size: 14rem;
    display: none;
  }
`
export const ArrowUpImg = styled(ArrowUpSvg)`
  width: 24rem;
  height: 24rem;
  margin-left: 3rem;
`

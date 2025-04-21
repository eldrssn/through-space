import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const PopupClose = styled.button`
  position: absolute;
  top: 30rem;
  right: 30rem;

  width: 60rem;
  height: 60rem;

  z-index: 3;

  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  border-radius: 57rem;
  opacity: 1;
  transition: 0.3s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 27%;
    display: block;

    width: 28rem;
    height: 2rem;
    border-radius: 2rem;

    transition-property: transform;
    transform: rotate(45deg);
    transition: 0.3s ease-in-out;
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    &::before,
    &::after {
      background-color: ${Colors.WHITE};
    }
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 24rem;
    height: 24rem;
    top: 12rem;
    right: 13rem;

    &::before,
    &::after {
      width: 12rem;
      height: 1rem;
      left: 23%;
    }
  }
`

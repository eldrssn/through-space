import styled, { css } from 'styled-components'

import { Breakpoints, Colors } from '@tokens'

export const SearchContainer = styled.form`
  width: 291rem;
  margin: 0 auto;
  position: absolute;
  top: 50rem;
  z-index: 1;
  left: 50%;
  translate: -50%;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 335rem;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  backdrop-filter: blur(15rem);
  -webkit-backdrop-filter: blur(15rem);
  background-color: rgba(255, 255, 255, 0.03);
  border: 1rem solid ${Colors.GREEN};
  border-radius: 12rem;
  padding: 10rem 10rem 10rem 25rem;

  min-height: 63rem;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18rem;
  color: ${Colors.GREEN};
  z-index: 300;

  &::placeholder {
    color: ${Colors.GREEN};
    opacity: 0.5;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    padding: 10rem 10rem 10rem 15rem;
  }
`

export const ClearButton = styled.button<{ $visible: boolean }>`
  position: absolute;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  right: 16rem;
  top: 22rem;
  border: none;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    scale 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s;
  border: 3rem solid ${Colors.GREEN};
  border-radius: 12rem;
  width: 20rem;
  height: 20rem;
  box-shadow: 0 2rem 12rem 0 rgba(30, 238, 174, 0.55);
  background: ${Colors.GREEN};
  padding: 0;

  &:hover {
    border-color: ${Colors.LIGHT_GREEN};
    background: ${Colors.LIGHT_GREEN};
    box-shadow:
      0 2rem 12rem 0 rgba(30, 238, 174, 0.55),
      0 2rem 12rem 0 rgba(30, 238, 174, 0.55);
  }

  &:active {
    scale: 0.98;
  }
`

export const ErrorMessage = styled.div<{ $visible: boolean }>`
  opacity: 0;
  color: ${Colors.GREEN};
  margin-top: 12rem;
  text-align: center;
  font-size: 16rem;

  ${({ $visible }) =>
    $visible &&
    css`
      animation: fadeIn 0.3s ease forwards;
    `}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 14rem;
  }
`

export const ResultList = styled.div<{ $visible: boolean }>`
  position: absolute;
  opacity: 0;
  width: 100%;
  top: 75%;
  left: 0;
  right: 0;
  backdrop-filter: blur(15rem);
  -webkit-backdrop-filter: blur(15rem);
  background-color: rgba(255, 255, 255, 0.03);
  border: 1rem solid ${Colors.GREEN};
  border-radius: 12rem;
  padding: 5rem 0;
  overflow: hidden;
  min-height: auto;
  transition: all 0.4s;
  pointer-events: none;

  ${({ $visible }) =>
    $visible &&
    css`
      animation: fadeIn 0.3s ease forwards;
      pointer-events: auto;
    `}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const ResultItem = styled.div`
  min-height: 40rem;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18rem;
  color: ${Colors.GREEN};
  z-index: 300;
  display: flex;
  align-items: center;
  padding: 10rem 10rem 10rem 25rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

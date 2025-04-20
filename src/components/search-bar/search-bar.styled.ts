import { Breakpoints } from '@tokens'
import styled, { css } from 'styled-components'

export const SearchContainer = styled.form`
  width: 891rem;
  margin: 0 auto;
  position: relative;
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
  border: 1rem solid #1eeeae;
  border-radius: 12rem;
  padding: 10rem 10rem 10rem 25rem;

  min-height: 63rem;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16rem;
  color: #1eeeae;
  z-index: 300;

  &::placeholder {
    color: #1eeeae;
    opacity: 0.5;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    padding: 10rem 10rem 10rem 15rem;
    font-size: 12rem;
  }
`

export const SearchButton = styled.button`
  position: absolute;
  right: 10rem;
  top: 10rem;
  border: none;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    scale 0.2s ease,
    box-shadow 0.2s ease;
  border: 3rem solid #1eeeae;
  border-radius: 12rem;
  padding: 10rem 35rem;
  width: 145rem;
  height: 43rem;
  box-shadow: 0 2rem 12rem 0 rgba(30, 238, 174, 0.55);
  background: #1eeeae;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18rem;
  color: #1b1f22;
  will-change: transform;

  &:hover {
    border-color: #4affc7;
    background: #4affc7;
    box-shadow:
      0 2rem 12rem 0 rgba(30, 238, 174, 0.55),
      0 2rem 12rem 0 rgba(30, 238, 174, 0.55);
  }

  &:active {
    scale: 0.98;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 86rem;
    height: 43rem;
    padding: 10rem;
  }
`

export const ErrorMessage = styled.div<{ $visible: boolean }>`
  opacity: 0;
  color: #f56565;
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

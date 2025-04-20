import { Breakpoints } from '@tokens'
import styled from 'styled-components'

export const FooterStyled = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  z-index: 100;
`

export const FooterList = styled.ul`
  list-style: none;
  padding: 50rem 0;
  margin: 0 auto;
  width: 910rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 20rem 0;
  }
`

export const FooterItem = styled.li`
  margin: 0;
  padding: 0;
  a {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14rem;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-align: center;
    color: #fff;
    opacity: 1;
    transition: 0.5s ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    margin-bottom: 10rem;
  }
`

export const FooterAd = styled.li`
  margin: 0;
  padding: 0;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14rem;
  text-align: center;
  color: rgba(129, 123, 147, 1);
  opacity: 1;
  transition: 0.5s ease-in-out;
  margin-right: 18rem;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    margin-bottom: 10rem;
    order: 1;
  }
`

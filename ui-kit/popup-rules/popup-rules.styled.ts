import styled from 'styled-components'
import CrossSvg from '@images/cross.svg'
import { Breakpoints } from '@tokens'

// const CrossSvg = 'images/cross.svg'

export const Container = styled.div`
  width: 676rem;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 335rem;
  }
`
export const HeaderBlock = styled.div`
  border: 1rem solid #1eeeae;
  border-radius: 6rem;
  padding: 25rem 15rem 25rem 31rem;
  width: 676rem;
  height: 110rem;
  backdrop-filter: blur(15rem);
  -webkit-backdrop-filter: blur(15rem);
  box-shadow: 0 25rem 35rem 0 rgba(0, 0, 0, 0.35);
  background: rgba(12, 14, 15, 0.8);
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 335rem;
    height: 125rem;
  }
`
export const Header = styled.h4`
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 24rem;
  text-transform: uppercase;
  color: #fff;
  flex-grow: 1;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 20rem;
    margin-right: 10rem;
    line-height: 126%;
  }
`
export const CloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
`

export const Content = styled.div`
  border: 1rem solid #1eeeae;
  border-radius: 6rem;
  padding: 35rem 30rem 45rem 55rem;
  width: 676rem;
  height: 505rem;
  backdrop-filter: blur(15rem);
  -webkit-backdrop-filter: blur(15rem);
  box-shadow: 0 25rem 35rem 0 rgba(0, 0, 0, 0.35);
  background: rgba(12, 14, 15, 0.8);

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 335rem;
    height: 468rem;
    padding: 26rem 14rem 45rem 30rem;
  }
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
`
export const ListItem = styled.li`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20rem;
  color: #fff;
  line-height: 125%;
  margin-bottom: 25rem;
  padding-left: 8rem;

  & a {
    color: #1eeeae;
    cursor: pointer;
    opacity: 1;
    transition: 0.5s ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 14rem;
  }
`

export const CrossImg = styled(CrossSvg)`
  width: 16rem;
  height: 16rem;

  @media screen and (max-width: ${Breakpoints.DESKTOP}px) {
    width: 20rem;
    height: 20rem;
  }
`

import { FC, useState } from 'react'

import { ArrowUpImg, ButtonUpStyled } from './button-up.styled'

export const ButtonUp: FC = () => {
  const [showButton] = useState(true)

  const scrollToHeader = () => {
    const spaceBox = document.querySelector('#header') as HTMLElement

    if (!spaceBox) return
    spaceBox.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  // useEffect(() => {
  //   const target = document.getElementById('space')
  //   if (!target) return

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setShowButton(entry.isIntersecting)
  //     },
  //     {
  //       root: null,
  //       threshold: 0.1,
  //     }
  //   )

  //   observer.observe(target)

  //   return () => {
  //     observer.disconnect()
  //   }
  // }, [])

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   })
  // }

  return (
    <ButtonUpStyled type="button" onClick={scrollToHeader} $visible={showButton}>
      <span>Наверх</span>
      <ArrowUpImg />
    </ButtonUpStyled>
  )
}

export default ButtonUp

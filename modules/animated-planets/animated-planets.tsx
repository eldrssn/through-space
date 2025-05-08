import { FC } from 'react'

import * as S from './animated-planets.styled'

export const AnimatedPlanets: FC = () => {
  return (
    <S.Wrapper>
      <S.OrbitBox1>
        <S.Orbit />
        <S.Planet1 />
      </S.OrbitBox1>
      <S.OrbitBox2>
        <S.Orbit />
        <S.Planet2 />
      </S.OrbitBox2>
      <S.OrbitBox3>
        <S.Orbit />
        <S.Planet4 />

        <S.SputnikBox2>
          <S.Spitnik2 />
        </S.SputnikBox2>
        <S.SputnikBox3>
          <S.Spitnik3 />
        </S.SputnikBox3>
        <S.SputnikBox4>
          <S.Spitnik4 />
        </S.SputnikBox4>
      </S.OrbitBox3>
      <S.OrbitBox4>
        <S.Orbit />

        <S.Planet3 />
        <S.SputnikBox1>
          <S.Spitnik1 />
        </S.SputnikBox1>
      </S.OrbitBox4>
      <S.OrbitBox5>
        <S.Orbit />
        <S.Planet5 />
      </S.OrbitBox5>
    </S.Wrapper>
  )
}

export default AnimatedPlanets

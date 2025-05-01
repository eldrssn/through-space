'use client'

import { FC, FormEvent, useState } from 'react'
import { SearchBarProps } from './types'
import * as S from './search-bar.styled'
import { useGetPlanetByName } from '@hooks'

export const SearchBar: FC<SearchBarProps> = ({ setSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [notFound, setNotFound] = useState(false)

  const { suggestions, isPending, isError } = useGetPlanetByName(searchTerm)

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    try {
      const result = await searchPlanetAsync(searchTerm)

      if (result?.data) {
        setSearchResult(result.data)
        setNotFound(false)
      } else {
        setSearchResult(null)
        setNotFound(true)
      }
    } catch (err) {
      setSearchResult(null)
      setNotFound(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    if (notFound) {
      setNotFound(false)
    }
  }

  return (
    <S.SearchContainer onSubmit={handleSearch}>
      <S.SearchInput
        type="text"
        placeholder="Введите имя планеты"
        value={searchTerm}
        onChange={handleChange}
        disabled={isPending}
      />
      <S.SearchButton type="submit" disabled={isPending} onClick={() => ym(101004048, 'reachGoal', 'click_search')}>
        {isPending ? 'Поиск...' : 'Найти'}
      </S.SearchButton>

      <S.ErrorMessage $visible={isError}>Планета не найдена, попробуйте еще раз.</S.ErrorMessage>
    </S.SearchContainer>
  )
}

export default SearchBar

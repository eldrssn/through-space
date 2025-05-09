'use client'

import { FC, useState } from 'react'
import { SearchBarProps } from './types'
import * as S from './search-bar.styled'
import { useDebounce, useGetPlanetByName } from '@hooks'
import { IPlanetItem } from '@/models'

export const SearchBar: FC<SearchBarProps> = ({ setSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isPlanetChoosen, setIsPlanetChoosen] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const { suggestions, isError } = useGetPlanetByName(debouncedSearchTerm)

  const handleClearSearchTerm = () => setSearchTerm('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPlanetChoosen(false)
    setSearchTerm(e.target.value)
    if (notFound) {
      setNotFound(false)
    }
  }

  const handleClickResultItem = (planet: IPlanetItem) => {
    setSearchResult(planet)
    setSearchTerm(planet.planet_name)
    setIsPlanetChoosen(true)
  }

  const isErrorMessageVisible = isError || (suggestions.length === 0 && !!debouncedSearchTerm)
  const isResultsVisible = suggestions.length > 0 && !isPlanetChoosen

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        placeholder="Enter the name of the planet"
        value={searchTerm}
        onChange={handleChange}
      />

      <S.ClearButton type="button" $visible={!!searchTerm} onClick={handleClearSearchTerm}>
        x
      </S.ClearButton>

      <S.ErrorMessage $visible={isErrorMessageVisible}>Planet not found, try again.</S.ErrorMessage>

      <S.ResultList $visible={isResultsVisible}>
        {suggestions?.map((suggestion) => (
          <S.ResultItem key={suggestion.id} onClick={() => handleClickResultItem(suggestion)}>
            {suggestion.planet_name}
          </S.ResultItem>
        ))}
      </S.ResultList>
    </S.SearchContainer>
  )
}

export default SearchBar

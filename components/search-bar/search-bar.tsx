'use client'

import { FC, useState } from 'react'

import { IPlanetItem } from '@/models'
import { useDebounce, useGetPlanetByName } from '@hooks'

import * as S from './search-bar.styled'
import { SearchBarProps } from './types'

export const SearchBar: FC<SearchBarProps> = ({ setSelectedPlanet }) => {
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
    setSelectedPlanet(planet)
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

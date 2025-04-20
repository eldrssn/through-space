import React from 'react'

import { ApiContext } from './api-context'
import { IApiContext } from './types'

export function useApi(): IApiContext {
  const context = React.useContext(ApiContext)
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider')
  }

  return context
}

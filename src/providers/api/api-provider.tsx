import React, { PropsWithChildren } from 'react'

import { ApiContext } from './api-context'
import { createApis } from './create-apis'

export const ApiProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApiContext.Provider
      value={createApis({
        basePath: import.meta.env.VITE_APP_API_URL,
      })}
    >
      {children}
    </ApiContext.Provider>
  )
}

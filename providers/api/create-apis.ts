import { ImageApi, Configuration } from '@api'

import { IApiContext } from './types'

interface ICreateApisParams {
  basePath?: string
}

export function createApis({ basePath }: ICreateApisParams): IApiContext {
  const param = {
    basePath,
    baseOptions: {
      withCredentials: false,
    },
  }

  return {
    base: new ImageApi(new Configuration(param)),
  }
}

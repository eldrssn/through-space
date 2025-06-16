import { gsap } from 'gsap'
import * as PIXI from 'pixi.js'
import { Assets, Texture } from 'pixi.js'

import { IPlanetItem } from '@/models'

import { BACKGROUND_ASSETS, INTERACTIVE_PLANTS_ASSETS, PARALLAX_DEPTH_FACTOR, TOOLTIP_IMG } from './constants'
import { PositionType } from './types'

export const sortingPlanets = (planets: IPlanetItem[]) => [...planets].sort((a, b) => a.z - b.z)

export const starTextures: PIXI.Texture[] = []
export const assetsTextures: PIXI.Texture[] = []

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let extraTextures: Record<string, PIXI.Texture<PIXI.TextureSource<any>>> = {}

export const preloadTextures = async (onProgress?: (progress: number) => void): Promise<void> => {
  const starResources: Record<string, string> = INTERACTIVE_PLANTS_ASSETS.reduce(
    (acc, path, index) => {
      acc[`star-${index}`] = path
      return acc
    },
    {} as Record<string, string>
  )

  const assetsTextures: Record<string, string> = BACKGROUND_ASSETS.reduce(
    (acc, path, index) => {
      acc[`assets-${index}`] = path
      return acc
    },
    {} as Record<string, string>
  )

  const extraResources: Record<string, string> = {
    tooltip: TOOLTIP_IMG,
  }

  Assets.addBundle('stars', starResources)
  Assets.addBundle('assets', assetsTextures)
  Assets.addBundle('extras', extraResources)

  let loaded = 0
  const total = Object.keys(starResources).length + Object.keys(extraResources).length

  const handleProgress = () => {
    loaded++
    const progress = Math.round((loaded / total) * 100)
    onProgress?.(progress)
  }

  const [stars, extras] = await Promise.all([
    Assets.loadBundle('stars', handleProgress) as Promise<Record<string, Texture>>,
    Assets.loadBundle('extras', handleProgress) as Promise<Record<string, Texture>>,
  ])

  starTextures.length = 0
  Object.values(stars).forEach((texture) => starTextures.push(texture))

  extraTextures = extras
}

export const getRandomStarTexture = (): PIXI.Texture => {
  if (starTextures.length === 0) {
    return PIXI.Texture.EMPTY
  }

  const randomIndex = Math.floor(Math.random() * starTextures.length)
  return starTextures[randomIndex]
}

export const createTweenMap = ({
  scale,
  position,
  newScale,
  newPosition,
  duration = 0.5,
  tweenUpdateHandler,
}: {
  scale: number
  position: PositionType
  newScale: number
  newPosition: PositionType
  duration?: number
  tweenUpdateHandler: (scale: number, position: PositionType) => void
}) =>
  gsap.to(
    {
      scale: scale,
      x: position.x,
      y: position.y,
    },
    {
      scale: newScale,
      x: newPosition.x,
      y: newPosition.y,
      duration,
      ease: 'power1.out',
      onUpdate: function () {
        const target = this.targets()[0]
        tweenUpdateHandler(target.scale, { x: target.x, y: target.y })
      },
    }
  )

export const getVirtualizedPlanets = (
  planetsList: IPlanetItem[],
  position: PositionType,
  scale: number,
  bufferSize: number = 100
): IPlanetItem[] => {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  const buffer = bufferSize / scale

  const viewportLeft = -position.x / scale
  const viewportTop = -position.y / scale
  const viewportRight = viewportLeft + viewportWidth / scale
  const viewportBottom = viewportTop + viewportHeight / scale

  return planetsList.filter((planet) => {
    const parallaxFactor = planet.z * PARALLAX_DEPTH_FACTOR

    const parallaxX = planet.x + position.x * parallaxFactor
    const parallaxY = planet.y + position.y * parallaxFactor

    return (
      parallaxX >= viewportLeft - buffer &&
      parallaxX <= viewportRight + buffer &&
      parallaxY >= viewportTop - buffer &&
      parallaxY <= viewportBottom + buffer
    )
  })
}

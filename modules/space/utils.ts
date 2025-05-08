import * as PIXI from 'pixi.js'
import { gsap } from 'gsap'

import { HEIGHT, MAX_SCALE, PARALLAX_DEPTH_FACTOR, WIDTH } from './constants'
import { PositionType } from './types'
import { IPlanetItem } from '@/models'

const names = ['Альфа', 'Бета', 'Гамма', 'Дельта', 'Эпсилон', 'Дзета', 'Эта', 'Тета']

export const sortingPlanets = (planets: IPlanetItem[]) => [...planets].sort((a, b) => a.z - b.z)

export const generateMockPlanets = (PLANET_COUNT: number): IPlanetItem[] => {
  const planets: IPlanetItem[] = Array.from({ length: PLANET_COUNT }).map((_, i) => ({
    // Диапазон X: от -WIDTH/2 до +WIDTH/2
    x: (Math.random() - 0.5) * WIDTH,

    // Диапазон Y: от -HEIGHT/2 до +HEIGHT/2
    y: (Math.random() - 0.5) * HEIGHT,

    // Z остаётся в [0, MAX_SCALE] для параллакса
    z: Math.random() * MAX_SCALE,
    compressed_image_path: '',
    image_path: '',

    radius: 4,
    planet_name: names[i % names.length] + '-' + (i + 1),
    id: String(i),
    author: 'Имя пользователя',
  }))

  return sortingPlanets(planets)
}

export const STAR_IMAGES = [
  '/images/map-planets/planet-1.png',
  '/images/map-planets/planet-2.png',
  '/images/map-planets/planet-3.png',
  '/images/map-planets/planet-4.png',
  '/images/map-planets/planet-5.png',
  '/images/map-planets/planet-6.png',
  '/images/map-planets/planet-7.png',
  '/images/map-planets/planet-8.png',
  '/images/map-planets/planet-9.png',
]

// Кэш для текстур звезд
export const starTextures: PIXI.Texture[] = []
export const extraTextures: PIXI.Texture[] = []

export const preloadStarTextures = async (onProgress?: (progress: number) => void): Promise<void> => {
  const totalAssets = STAR_IMAGES.length
  let loadedCount = 0

  starTextures.length = 0
  extraTextures.length = 0

  const updateProgress = () => {
    loadedCount++
    const progress = Math.round((loadedCount / totalAssets) * 100)
    onProgress?.(progress)
  }

  const starLoadPromises = STAR_IMAGES.map((path) =>
    PIXI.Assets.load(path)
      .then((texture) => {
        starTextures.push(texture)
        updateProgress()
        return texture
      })
      .catch(() => {
        updateProgress()
        return null
      })
  )

  await Promise.all([...starLoadPromises])
}

// Функция для получения случайной текстуры звезды из предзагруженных
export const getRandomStarTexture = (): PIXI.Texture => {
  // Если текстуры еще не загружены, возвращаем пустую текстуру
  if (starTextures.length === 0) {
    return PIXI.Texture.EMPTY
  }

  // Выбираем случайную текстуру из массива
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

/**
 * Фильтрует планеты, чтобы отображать только те, которые видны в текущем вьюпорте
 * @param planetsList - Полный список всех планет
 * @param position - Текущая позиция вьюпорта (центр экрана)
 * @param scale - Текущий масштаб
 * @param bufferSize - Дополнительная буферная зона вокруг вьюпорта в пикселях (по умолчанию: 300)
 * @returns Массив планет, которые видимы в текущем вьюпорте
 */
export const getVisiblePlanets = (
  planetsList: IPlanetItem[],
  position: PositionType,
  scale: number,
  bufferSize: number = 100
): IPlanetItem[] => {
  // Получаем размеры вьюпорта
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // Буфер в мировых координатах
  const buffer = bufferSize / scale

  const viewportLeft = -position.x / scale
  const viewportTop = -position.y / scale
  const viewportRight = viewportLeft + viewportWidth / scale
  const viewportBottom = viewportTop + viewportHeight / scale

  return planetsList.filter((planet) => {
    const parallaxFactor = planet.z * PARALLAX_DEPTH_FACTOR

    // Calculate parallax-adjusted position
    const parallaxX = planet.x + position.x * parallaxFactor
    const parallaxY = planet.y + position.y * parallaxFactor

    // Check if the planet is within the viewport (with buffer)
    return (
      parallaxX >= viewportLeft - buffer &&
      parallaxX <= viewportRight + buffer &&
      parallaxY >= viewportTop - buffer &&
      parallaxY <= viewportBottom + buffer
    )
  })
}

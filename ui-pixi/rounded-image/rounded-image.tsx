import { FC, useEffect, useRef, useState } from 'react'
import * as PIXI from 'pixi.js'
import { Container, Graphics, Sprite } from '@pixi/react'
import { RoundedImageProps } from './types'
import planetPlaceholder from './images/planet-placeholder-xs.png'

export const RoundedImage: FC<RoundedImageProps> = ({ image, width, height, radius, x, y }) => {
  const spriteRef = useRef<PIXI.Sprite>(null)
  const maskRef = useRef<PIXI.Graphics>(null)
  const [texture, setTexture] = useState<PIXI.Texture | null>(null)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    let isMounted = true
    setTexture(null)
    setLoadError(false)

    const imageUrlToLoad = image && typeof image === 'string' && image.trim() !== '' ? image : planetPlaceholder // Если image невалидный, сразу грузим плейсхолдер

    PIXI.Assets.load(imageUrlToLoad) // Используем современный Assets.load
      .then((loadedTexture) => {
        if (isMounted) {
          setTexture(loadedTexture)
        } else {
          // Если компонент размонтирован до загрузки, выгружаем текстуру из кэша Assets, если она больше не нужна
          PIXI.Assets.unload(imageUrlToLoad).catch((err) => console.warn('Failed to unload asset', err))
        }
      })
      .catch(() => {
        if (isMounted) {
          setLoadError(true) // Ставим флаг ошибки
          // Пытаемся загрузить плейсхолдер как fallback, если основная картинка не загрузилась
          if (imageUrlToLoad !== planetPlaceholder) {
            PIXI.Assets.load(planetPlaceholder).then((placeholderTexture) => {
              if (isMounted) setTexture(placeholderTexture)
            })
            // .catch((placeholderErr) => {
            // Тут совсем все плохо, можно оставить texture = null
            // })
          }
        }
      })

    return () => {
      isMounted = false
    }
  }, [image])

  useEffect(() => {
    if (spriteRef.current && maskRef.current && texture) {
      // Убедимся, что спрайт видим перед применением маски
      spriteRef.current.visible = true
      spriteRef.current.mask = maskRef.current
    } else if (spriteRef.current) {
      // Если текстуры нет, убираем маску и скрываем спрайт (если он есть)
      spriteRef.current.mask = null
      spriteRef.current.visible = false
    }
  }, [texture]) // Зависим от текстуры

  return (
    <Container x={x} y={y}>
      <Sprite
        ref={spriteRef}
        texture={texture ?? PIXI.Texture.EMPTY}
        width={width}
        height={height}
        anchor={0.5}
        visible={!!texture}
      />

      {!texture && !loadError && (
        <Graphics
          draw={(g) => {
            g.clear()
              .beginFill(0x333333) // Серый квадрат как индикатор загрузки
              .drawRoundedRect(-width / 2, -height / 2, width, height, radius)
              .endFill()
          }}
        />
      )}
      {/* {!texture &&
        loadError && ( // Красный квадрат, если ошибка и плейсхолдер тоже не загрузился
          <Graphics
            draw={(g) => {
              g.clear()
                .beginFill(0xff0000, 0.5) // Полупрозрачный красный при ошибке
                .drawRoundedRect(-width / 2, -height / 2, width, height, radius)
                .endFill()
            }}
          />
        )} */}

      <Graphics
        ref={maskRef}
        draw={(g) => {
          g.clear()
            .beginFill(0xffffff) // Цвет маски не важен, важна форма и альфа
            .drawRoundedRect(-width / 2, -height / 2, width, height, radius)
            .endFill()
        }}
      />
    </Container>
  )
}

'use client'

import * as S from './styled'
import { Content } from '@/components'

export default function Home() {
  // const [loadingProgress, setLoadingProgress] = useState(0)
  // const [showLoader, setShowLoader] = useState(true)
  // const handleAssetsProgress = (progress: number) => {
  //   setLoadingProgress(progress)
  // }

  // const { isLoading, planets: planesList } = useGetPlanets()

  // const [isAssetsLoaded, setAssetsLoaded] = useState(false)

  // useEffect(() => {
  //   const fakeLoaderTimer = setTimeout(() => {
  //     setShowLoader(false)
  //   }, 2000)

  //   const loadTextures = async () => {
  //     await preloadTextures((progress) => {
  //       handleAssetsProgress(progress)
  //     })
  //     setAssetsLoaded(true)
  //   }

  //   loadTextures()

  //   return () => {
  //     clearTimeout(fakeLoaderTimer)
  //   }
  // }, [])

  return (
    <>
      <S.Main>
        {/* <Header> Together Through the&nbsp;Space</Header> */}
        {/* <AnimatedPlanets /> */}
        <Content />
        {/* {isAssetsLoaded && <Space />} */}
      </S.Main>
      {/* {(showLoader || !planesList || isLoading || !isAssetsLoaded) && <Loader progress={loadingProgress} />} */}
    </>
  )
}

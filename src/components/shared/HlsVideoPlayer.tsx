import { useState, useEffect, forwardRef } from 'react'
import { Box, CircularProgress } from '@mui/material'
import Hls from 'hls.js'
import { useQuery } from 'react-query'

interface Props {
  videoUrl: string
  width?: string | number
  height?: string | number
  autoPlay?: boolean
  controls?: boolean
}

function BaseHLSVideoPlayer(
  {
    videoUrl,
    width = '100%',
    height = 'auto',
    autoPlay = false,
    controls = true,
  }: Props,
  ref: React.Ref<HTMLVideoElement>,
) {
  const [isLoading, setIsLoading] = useState(true)

  const { data: hlsInstance } = useQuery({
    queryKey: ['hls', videoUrl],
    queryFn: async () => {
      const hls = new Hls({
        maxBufferSize: 0,
        maxBufferLength: 10,
        enableWorker: true,
        startLevel: -1,
        backBufferLength: 30,
        maxMaxBufferLength: 30,
      })

      return new Promise<Hls>((resolve, reject) => {
        hls.loadSource(videoUrl)
        hls.on(Hls.Events.MANIFEST_PARSED, () => resolve(hls))
        hls.on(Hls.Events.ERROR, (_, data) => {
          if (data.fatal) reject(new Error('HLS 로드 실패'))
        })
      })
    },
    enabled: Boolean(videoUrl),
  })

  useEffect(() => {
    if (!ref || !('current' in ref) || !ref.current || !hlsInstance) return

    hlsInstance.attachMedia(ref.current)

    if (autoPlay) {
      ref.current.play().catch(console.log)
    }

    return () => {
      hlsInstance.destroy()
    }
  }, [hlsInstance, videoUrl, ref])

  return (
    <Box position="relative" width={width} height={height}>
      <video
        ref={ref}
        controls={controls}
        style={{ width: '100%', height: '100%' }}
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
      />
      {isLoading && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{ transform: 'translate(-50%, -50%)' }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  )
}

const HLSVideoPlayer = forwardRef<HTMLVideoElement, Props>(BaseHLSVideoPlayer)

export default HLSVideoPlayer

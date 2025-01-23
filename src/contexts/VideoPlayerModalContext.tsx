import VideoModal from '@/components/shared/VideoModal'
import { Video } from '@/models/video'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

interface VideoPlayerModalContextValue {
  open: (value: Video) => void
}

const defaultValue: Video & { isOpen: boolean } = {
  isOpen: false,
  type: 'lecture',
  videoUrl: '',
  title: '',
}

const Context = createContext<VideoPlayerModalContextValue | null>(null)

export function VideoPlayerModalContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [video, setVideo] = useState<Video & { isOpen: boolean }>(defaultValue)

  const $portal_root =
    typeof window === 'undefined'
      ? null
      : document.getElementById('root-portal')

  const open = useCallback(
    (value: Video) => {
      setVideo({ isOpen: true, ...value })
    },
    [video],
  )

  const close = useCallback(() => {
    setVideo(defaultValue)
  }, [video])

  const value: VideoPlayerModalContextValue = useMemo(
    () => ({
      open: open,
    }),
    [open, close],
  )

  return (
    <Context.Provider value={value}>
      {children}
      {video.isOpen && $portal_root != null
        ? (createPortal(
            <VideoModal
              open={video.isOpen}
              onClose={close}
              video={{ ...video }}
            />,
            $portal_root,
          ) as ReactNode)
        : null}
    </Context.Provider>
  )
}

export function useVideoPlayerModalContext() {
  const context = useContext(Context)
  if (!context) {
    throw new Error('VideoPlayerModalContext 내부에서 사용해주세요')
  }
  return context
}

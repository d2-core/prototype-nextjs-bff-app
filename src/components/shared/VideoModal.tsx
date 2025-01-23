import { Box, Dialog, DialogContent, Typography } from '@mui/material'
import { Video } from '@/models/video'
import { useRef } from 'react'
import HlsVideoPlayer from './HlsVideoPlayer'
import Spacing from './Spacing'

interface Props {
  open: boolean
  onClose: () => void
  video: Video
}
function VideoModal({ open, onClose, video }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <Box>
          <Typography variant="h6">{video.title}</Typography>
          <Spacing />
          <HlsVideoPlayer
            ref={videoRef}
            videoUrl={video.videoUrl}
            width="100%"
            height="100%"
            controls={true}
            autoPlay={false}
          />
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default VideoModal

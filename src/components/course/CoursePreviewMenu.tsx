import { PlayCircleOutline } from '@mui/icons-material'
import { Box, Button, Menu, Typography, Divider } from '@mui/material'
import { useState } from 'react'
import { useVideoPlayerModalContext } from '@/contexts/VideoPlayerModalContext'
import Spacing from '../shared/Spacing'
import { PreviewLecture } from '@/models/lecture'
import { TeacherCourse } from '@/models/teacher'

interface PreviewMenuProps {
  teacherCourse: TeacherCourse
}

function CouresPreviewMenu({ teacherCourse }: PreviewMenuProps) {
  const { open } = useVideoPlayerModalContext()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleClose = () => setAnchorEl(null)

  const handlePreviewClick = (video: PreviewLecture) => {
    handleClose()
    open({
      type: 'lecture',
      videoUrl: video.videoUrl ?? '',
      title: (
        <Box>
          <Typography variant="h6">{`${teacherCourse.title} - ${video.title}`}</Typography>
          <Spacing size={4} />
          <Box display={'flex'} gap={1} alignItems={'center'} mb={1}>
            <Box
              component="img"
              src={teacherCourse?.teacher?.imageUrl}
              alt={teacherCourse?.teacher?.nickname}
              sx={{ width: 24, height: 24, borderRadius: '50%' }}
            />
            <Typography variant="body2" color="text.secondary">
              {teacherCourse?.teacher?.nickname}
            </Typography>
          </Box>
        </Box>
      ),
    })
  }

  return (
    <>
      <Button
        variant="contained"
        startIcon={<PlayCircleOutline />}
        size="small"
        onClick={(e) => {
          e.stopPropagation()
          setAnchorEl(e.currentTarget)
        }}
        sx={{
          position: 'absolute',
          bottom: 8,
          right: 8,
          bgcolor: 'rgba(0,0,0,0.6)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
        }}
      >
        미리보기
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={(e) => e.stopPropagation()}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            width: '240px',
            maxHeight: '400px',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
            '& .MuiList-root': {
              padding: 1,
            },
          },
        }}
      >
        {teacherCourse.previewLectures?.map((video, index) => (
          <Box
            key={index}
            onClick={() => handlePreviewClick(video)}
            width={'100%'}
            display={'flex'}
            flexDirection={'column'}
            sx={{
              py: '16px',
              px: '12px',
            }}
          >
            <Typography variant="body1">강의 미리보기</Typography>
            <Divider sx={{ my: 1 }} />
            <Box
              height={'48px'}
              display={'flex'}
              alignItems="center"
              justifyContent={'space-between'}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)',
                },
              }}
            >
              <Typography variant="body2">{video.title}</Typography>
              <Typography variant="body2">{video.duration}</Typography>
            </Box>
          </Box>
        ))}
      </Menu>
    </>
  )
}

export default CouresPreviewMenu

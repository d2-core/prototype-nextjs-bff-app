import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import useUser from '@/hooks/useUser'

function TopNav() {
  const route = useRouter()
  const { user } = useUser()
  const [downloadAnchorEl, setDownloadAnchorEl] = useState<null | HTMLElement>(
    null,
  )

  const handleWorkspaceRoute = useCallback(() => {
    route.push('/')
  }, [route])

  const handleLoginPageRoute = useCallback(() => {
    route.push('/auth/login')
  }, [route])

  const handleMyPageRoute = useCallback(() => {
    route.push('/my')
  }, [route])

  const handleDownloadClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation() // 이벤트 전파 중지
    setDownloadAnchorEl(event.currentTarget)
  }

  const handleDownloadClose = () => {
    setDownloadAnchorEl(null)
  }

  const handleLectureDetail = useCallback(
    (lectureId: number, event: React.MouseEvent) => {
      event.preventDefault() // 기본 이벤트 방지
      event.stopPropagation() // 이벤트 전파 중지
      route.push(`/workspace/lecture/${lectureId}`)
      handleDownloadClose()
    },
    [route],
  )

  const randerAuth = useCallback(() => {
    if (!user) {
      return (
        <Button
          onClick={handleLoginPageRoute}
          variant="contained"
          color="primary"
        >
          로그인
        </Button>
      )
    }

    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button onClick={handleMyPageRoute} variant="contained" color="primary">
          마이페이지
        </Button>
      </Box>
    )
  }, [user, handleLoginPageRoute, handleMyPageRoute])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        padding: '12px 24px',
        borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}`,
        bgcolor: 'background.paper',
        zIndex: 1000,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography
          onClick={handleWorkspaceRoute}
          variant="h6"
          sx={{
            color: 'inherit',
            cursor: 'pointer',
            '&:hover': {
              color: (theme) => theme.palette.primary.main,
            },
          }}
        >
          Creation
        </Typography>
      </Box>

      {randerAuth()}
    </Box>
  )
}

export default TopNav

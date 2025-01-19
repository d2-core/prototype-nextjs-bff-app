import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import useUser from '@/hooks/useUser'
import { useLoginModalContext } from '@/contexts/LoginModalContext'

function TopNav() {
  const route = useRouter()
  const { user } = useUser()
  const { open } = useLoginModalContext()

  const handleRouteHomePage = useCallback(() => {
    route.push('/')
  }, [route])

  const handleOpenLoginModal = useCallback(() => {
    open()
  }, [route])

  const handleRouteMyPage = useCallback(() => {
    route.push('/my')
  }, [route])

  const randerAuth = useCallback(() => {
    if (!user) {
      return (
        <Button
          onClick={handleOpenLoginModal}
          variant="contained"
          color="primary"
        >
          로그인
        </Button>
      )
    }

    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button onClick={handleRouteMyPage} variant="contained" color="primary">
          마이페이지
        </Button>
      </Box>
    )
  }, [user, handleOpenLoginModal, handleRouteMyPage])

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
          onClick={handleRouteHomePage}
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

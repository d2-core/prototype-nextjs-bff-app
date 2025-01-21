import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Spacing from './Spacing'

interface Props {
  title: ReactNode
  length: number
  routePath?: string
}

function ListDirection({ title, length, routePath }: Props) {
  const route = useRouter()
  const handleRoutePath = () => {
    if (routePath) {
      route.push(routePath)
    }
  }
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Typography variant="h6">{title}</Typography>
        {length !== 0 && (
          <Typography component="span" color="text.secondary" sx={{ ml: 1 }}>
            ({length})
          </Typography>
        )}
      </Box>
      <Spacing />
      {routePath && (
        <Button variant="text" onClick={handleRoutePath}>
          더보기
        </Button>
      )}
    </Box>
  )
}

export default ListDirection

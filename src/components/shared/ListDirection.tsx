import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface Props {
  title: ReactNode
  routePath: string
}

function ListDirection({ title, routePath }: Props) {
  const route = useRouter()
  const handleRoutePath = () => {
    route.push(routePath)
  }
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <Typography variant="h6">{title}</Typography>
      <Button variant="text" onClick={handleRoutePath}>
        더보기
      </Button>
    </Box>
  )
}

export default ListDirection

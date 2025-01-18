import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
  title: ReactNode
}
function EmptyCard({ title }: Props) {
  return (
    <Box textAlign="center" py={4}>
      <Typography color="text.secondary">{title}</Typography>
    </Box>
  )
}
export default EmptyCard

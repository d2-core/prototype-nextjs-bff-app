import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Box, IconButton, Stack } from '@mui/material'

interface Props {
  onLeft: () => void
  onRight: () => void
}

function ScrollControl({ onLeft, onRight }: Props) {
  return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <IconButton
        onClick={onLeft}
        sx={{ bgcolor: 'background.paper', boxShadow: 1 }}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={onRight}
        sx={{ bgcolor: 'background.paper', boxShadow: 1 }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  )
}

export default ScrollControl

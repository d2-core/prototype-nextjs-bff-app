import { Box, Typography } from '@mui/material'

function CourseHeader() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom textAlign="center">
        Creation Academy 강의
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="center"
        sx={{ mb: 6 }}
      >
        나에게 딱 맞는 강의를 찾아보세요
      </Typography>
    </Box>
  )
}

export default CourseHeader

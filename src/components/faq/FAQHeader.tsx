import { Box, Typography } from '@mui/material'

function FAQHeader() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom textAlign="center">
        자주 묻는 질문
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Creation Academy에 대해 궁금하신 점을 확인해보세요
      </Typography>
    </Box>
  )
}

export default FAQHeader

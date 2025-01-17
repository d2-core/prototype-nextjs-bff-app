import { Box, Typography } from '@mui/material'

function TeacherSectionHeader() {
  return (
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography variant="h4" gutterBottom>
        최고의 전문가와 함께하는 실무 교육
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        각 분야 현업 전문가들이 실무 경험을 공유합니다
      </Typography>
    </Box>
  )
}

export default TeacherSectionHeader

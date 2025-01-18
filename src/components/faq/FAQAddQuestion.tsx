import { ChatBubbleOutline, Person } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'

function FAQAddQuestion() {
  return (
    <Box
      sx={{
        mt: 6,
        p: 4,
        bgcolor: 'white',
        borderRadius: 2,
        textAlign: 'center',
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" gutterBottom>
        더 궁금하신 점이 있으신가요?
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Creation Academy 고객센터가 친절히 답변해드리겠습니다.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" startIcon={<ChatBubbleOutline />}>
            1:1 문의하기
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" startIcon={<Person />}>
            선생님 지원하기
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
export default FAQAddQuestion

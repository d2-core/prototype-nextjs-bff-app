import TopNav from '@/components/shared/TopNav'
import Question from '@/components/question/Question'
import { Box } from '@mui/material'
import { questions } from '@/utils/dummy'

function MyQuestion() {
  return (
    <Box>
      <TopNav />
      <Question questions={questions} title="나의 질문" />
    </Box>
  )
}

export default MyQuestion

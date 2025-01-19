import Question from '@/components/question/Question'
import TopNav from '@/components/shared/TopNav'
import { questions } from '@/utils/dummy'
import { Box } from '@mui/material'

function TeacherQuestionPage() {
  return (
    <Box>
      <TopNav />
      <Question questions={questions} title="선생님 질문" />
    </Box>
  )
}

export default TeacherQuestionPage

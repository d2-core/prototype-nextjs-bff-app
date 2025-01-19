import Question from '@/components/question/Question'
import TopNav from '@/components/shared/TopNav'
import { questions } from '@/utils/dummy'
import { Box } from '@mui/material'

function CourseQuestionPage() {
  return (
    <Box>
      <TopNav />
      <Question questions={questions} title="강의 질문" />
    </Box>
  )
}

export default CourseQuestionPage

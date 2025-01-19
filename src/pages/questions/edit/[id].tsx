import QuestionForm from '@/components/question/QuestionForm'
import TopNav from '@/components/shared/TopNav'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

function ModifyQuestionPage() {
  const route = useRouter()
  const { id } = route.query
  return (
    <Box>
      <TopNav />
      <QuestionForm questionId={parseInt(id as string)} />
    </Box>
  )
}

export default ModifyQuestionPage

// 강좌, 질문, 리뷰, 공지사항
// 질문, 리뷰

import TopNav from '@/components/shared/TopNav'
import QuestionDetail from '@/components/question/QuestionDetail'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

function MyQuestionDetailPage() {
  const route = useRouter()
  const { id } = route.query
  return (
    <Box>
      <TopNav />
      <QuestionDetail questionId={parseInt(id as string)} />
    </Box>
  )
}

export default MyQuestionDetailPage

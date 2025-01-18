import QuestionDetail from '@/components/question/QuestionDetail'
import TopNav from '@/components/shared/TopNav'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

function QuestionDetailPage() {
  const route = useRouter()
  const { id } = route.query

  return (
    <Box>
      <TopNav />
      <QuestionDetail questionId={parseInt(id as string)} />
    </Box>
  )
}

export default QuestionDetailPage

import ReviewForm from '@/components/review/ReviewForm'
import TopNav from '@/components/shared/TopNav'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

function RegisterReviewPage() {
  const route = useRouter()
  const { id } = route.query

  return (
    <Box>
      <TopNav />
      <ReviewForm reviewId={parseInt(id as string)} />
    </Box>
  )
}

export default RegisterReviewPage

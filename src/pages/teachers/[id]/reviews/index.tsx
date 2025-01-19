import Review from '@/components/review/Review'
import TopNav from '@/components/shared/TopNav'
import { reviews } from '@/utils/dummy'
import { Box } from '@mui/material'

function TeacherReviewPage() {
  return (
    <Box>
      <TopNav />
      <Review reviews={reviews} title="선생님 리뷰" />
    </Box>
  )
}

export default TeacherReviewPage

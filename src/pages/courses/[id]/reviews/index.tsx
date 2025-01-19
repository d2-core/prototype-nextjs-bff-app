import Review from '@/components/review/Review'
import TopNav from '@/components/shared/TopNav'
import { reviews } from '@/utils/dummy'
import { Box } from '@mui/material'

function CourseReviewPage() {
  return (
    <Box>
      <TopNav />
      <Review reviews={reviews} title="강의 리뷰" />
    </Box>
  )
}

export default CourseReviewPage

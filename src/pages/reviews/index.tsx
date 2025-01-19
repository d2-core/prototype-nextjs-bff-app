import Review from '@/components/review/Review'
import TopNav from '@/components/shared/TopNav'
import { reviews } from '@/utils/dummy'
import { Box } from '@mui/material'

function ReviewPage() {
  return (
    <Box>
      <TopNav />
      <Review reviews={reviews} />
    </Box>
  )
}

export default ReviewPage

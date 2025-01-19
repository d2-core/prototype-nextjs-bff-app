import TopNav from '@/components/shared/TopNav'
import Review from '@/components/review/Review'
import { Box } from '@mui/material'
import useUser from '@/hooks/useUser'
import { reviews } from '@/utils/dummy'

function MyReviewPage() {
  const { user } = useUser()
  return (
    <Box>
      <TopNav />
      <Review reviews={reviews} title="나의 리뷰" user={user} />
    </Box>
  )
}

export default MyReviewPage

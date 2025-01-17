import { StudentCourseReview } from '@/models/student'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Rating,
  Typography,
} from '@mui/material'

interface Props {
  studentReviews: StudentCourseReview[]
}

function StudentReviewGrid({ studentReviews }: Props) {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        💬 수강생 후기
      </Typography>
      <Grid container spacing={3}>
        {studentReviews.map((review) => (
          <Grid item xs={12} md={4} key={review.studentId}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    component={'img'}
                    src={review.studentImageUrl}
                    alt="thumbnail"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1">
                      {review.nickname}
                    </Typography>
                    <Rating value={review.rating ?? 5} readOnly size="small" />
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {review.review}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default StudentReviewGrid

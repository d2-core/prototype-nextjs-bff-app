import { Avatar, Box, Button, Chip, Rating, Typography } from '@mui/material'
import { ThumbUp } from '@mui/icons-material'
import { Review } from '@/models/review'

interface Props {
  review: Review
  truncate?: boolean
}

function ReviewListItem({ review, truncate }: Props) {
  return (
    <Box key={review.id}>
      <Box display="flex" gap={3} mb={3}>
        <Box
          display="flex"
          gap={2}
          width={200}
          sx={{
            flexShrink: 0,
          }}
        >
          <Avatar
            src={review.userImage}
            sx={{
              width: 48,
              height: 48,
              flexShrink: 0,
            }}
          />
          <Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography
                variant="subtitle1"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: 130,
                }}
              >
                {review.userName}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {new Date(review.date).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>

        {/* Review Content */}
        <Box flex={1}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Rating
              value={review.rating}
              readOnly
              precision={0.5}
              size="small"
            />
            {review.verified && (
              <Chip
                label="Verified"
                size="small"
                color="success"
                sx={{ height: 20 }}
              />
            )}
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            mb={1}
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            for {review.courseName}
          </Typography>
          <Typography
            variant="body1"
            sx={
              truncate
                ? {
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minHeight: '4.5em',
                  }
                : undefined
            }
          >
            {review.comment}
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Button size="small" startIcon={<ThumbUp />}>
              Helpful ({review.helpful})
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ReviewListItem

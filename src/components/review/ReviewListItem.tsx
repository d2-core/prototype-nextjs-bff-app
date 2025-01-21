import { Avatar, Box, Button, Chip, Rating, Typography } from '@mui/material'
import { ThumbUp } from '@mui/icons-material'
import { Review } from '@/models/review'
import Spacing from '../shared/Spacing'
import useUser from '@/hooks/useUser'
import { useAlertContext } from '@/contexts/AlertContext'
import { MouseEvent } from 'react'
import { useQueryClient } from 'react-query'
import { useRouter } from 'next/router'

interface Props {
  review: Review
  truncate?: boolean
  hideDelete?: boolean
}

function ReviewListItem({ review, truncate, hideDelete = false }: Props) {
  const { user } = useUser()
  const { open } = useAlertContext()
  const queryClient = useQueryClient()

  const handleHelpful = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(review.id)
    // queryClient
  }
  const handleDleete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    open({
      title: '삭제 확인',
      description: '이 항목을 삭제하시겠습니까?',
      primaryButtonLabel: '삭제',
      secondaryButtonLabel: '취소',
      onPrimaryButtonClick: () => {
        console.log(review.id)
        // queryClient
      },
    })
  }
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
          <Spacing size={8} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent={'space-between'}
          >
            <Button
              size="small"
              startIcon={<ThumbUp />}
              onClick={handleHelpful}
            >
              Helpful ({review.helpful})
            </Button>

            {hideDelete === false && user?.id === review.userId && (
              <Button size="small" onClick={handleDleete}>
                삭제하기
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ReviewListItem

import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
} from '@mui/material'
import { ReactNode, useState } from 'react'
import ReviewListItem from './ReviewListItem'
import EmptyCard from '../shared/EmptyCard'
import { Sort } from '@/models/sort'
import ReviewFilter from './ReviewFilter'
import { Review as IReview } from '@models/review'
import { User } from '@/models/auth'
import { useRouter } from 'next/router'
import ListDirection from '../shared/ListDirection'

// 카테고리 목록
const sorts: Sort[] = [
  {
    id: '',
    label: 'Programming',
  },
  {
    id: '',
    label: 'Design',
  },
  {
    id: '',
    label: 'Business',
  },
  {
    id: '',
    label: 'Marketing',
  },
]

interface Props {
  reviews: IReview[]
  title?: ReactNode
  user?: User | null
}

function Review({ reviews, title, user }: Props) {
  const [sortBy, setSortBy] = useState('recent')
  const [ratingFilter, setRatingFilter] = useState<number[]>([0, 5])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.courseName.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRating =
      review.rating >= ratingFilter[0] && review.rating <= ratingFilter[1]

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(review.courseCategory)

    return matchesSearch && matchesRating && matchesCategory
  })

  // 정렬된 리뷰 목록
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'helpful':
        return b.helpful - a.helpful
      case 'rating-high':
        return b.rating - a.rating
      case 'rating-low':
        return a.rating - b.rating
      default:
        return 0
    }
  })

  const route = useRouter()

  const handleRouteReviewRegister = () => {
    route.push('/reviews/edit')
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <ReviewFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            ratingFilter={ratingFilter}
            onRatingChange={setRatingFilter}
            categories={[]}
            selectedCategories={selectedCategories}
            onCategoryChange={setSelectedCategories}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onClearFilters={() => {
              setSearchTerm('')
              setRatingFilter([0, 5])
              setSelectedCategories([])
              setSortBy('recent')
            }}
          />
        </Grid>

        <Grid item xs={12} md={9}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            {title && <ListDirection title={title} length={reviews.length} />}

            {user && (
              <Button onClick={handleRouteReviewRegister}>등록하기</Button>
            )}
          </Box>

          <Card>
            <CardContent>
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <Box>
                    <ReviewListItem review={review} />
                    {index !== sortedReviews.length - 1 ? (
                      <Divider sx={{ my: 3 }} />
                    ) : null}
                  </Box>
                ))
              ) : (
                <EmptyCard title={'No reviews match your filters.'} />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Review

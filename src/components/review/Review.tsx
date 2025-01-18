import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
} from '@mui/material'
import { useState } from 'react'
import ReviewListItem from './ReviewListItem'
import EmptyCard from '../shared/EmptyCard'
import { Sort } from '@/models/sort'
import ReviewFilter from './ReviewFilter'
import { Review as IReview } from '@models/review'

const DUMMY_REVIEWS: IReview[] = [
  {
    id: '1',
    userName: 'John Smith',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    rating: 4.5,
    date: '2024-01-15',
    comment:
      'This React course is exceptional! The instructor breaks down complex concepts into digestible pieces. The practical projects really helped solidify my understanding. Highly recommended for anyone looking to master React and TypeScript.',
    helpful: 42,
    courseName: 'Complete React Development with TypeScript',
    courseCategory: 'Programming',
    verified: true,
  },
  {
    id: '2',
    userName: 'Emma Wilson',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    rating: 5,
    date: '2024-01-14',
    comment: `The best UX design course I've taken so far. The assignments were challenging but very practical. I've already started applying what I learned in my daily work. The instructor's feedback was always constructive and helpful.'`,
    helpful: 38,
    courseName: 'Advanced UX Design Principles',
    courseCategory: 'Design',
    verified: true,
  },
  {
    id: '3',
    userName: 'Michael Chen',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    rating: 3.5,
    date: '2024-01-13',
    comment:
      'Good content but the pace was a bit fast for beginners. Would appreciate more practical examples. The course materials were comprehensive though, and the community support was helpful.',
    helpful: 15,
    courseName: 'Digital Marketing Fundamentals',
    courseCategory: 'Marketing',
    verified: false,
  },
  {
    id: '4',
    userName: 'Sarah Johnson',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
    rating: 5,
    date: '2024-01-12',
    comment:
      'Incredible value for money! The business strategy frameworks taught in this course have completely changed how I approach my work. The case studies were particularly enlightening.',
    helpful: 56,
    courseName: 'Strategic Business Management',
    courseCategory: 'Business',
    verified: true,
  },
  {
    id: '5',
    userName: 'David Kim',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5',
    rating: 4,
    date: '2024-01-11',
    comment:
      'The Python programming section was excellent, especially the data analysis modules. However, I wish there were more advanced topics covered. Great for beginners and intermediate learners.',
    helpful: 28,
    courseName: 'Python for Data Science',
    courseCategory: 'Programming',
    verified: true,
  },
]

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

function Review() {
  const [sortBy, setSortBy] = useState('recent')
  const [ratingFilter, setRatingFilter] = useState<number[]>([0, 5])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // 필터링된 리뷰 목록
  const filteredReviews = DUMMY_REVIEWS.filter((review) => {
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

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Left Sidebar - Filters */}
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

        {/* Right Side - Review List */}
        <Grid item xs={12} md={9}>
          {/* Sort Controls */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography variant="h5">
              Course Reviews
              <Typography
                component="span"
                color="text.secondary"
                sx={{ ml: 1 }}
              >
                ({sortedReviews.length})
              </Typography>
            </Typography>
            {/* <SortControls /> */}
          </Box>

          <Card>
            <CardContent>
              {sortedReviews.length > 0 ? (
                sortedReviews.map((review, index) => (
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

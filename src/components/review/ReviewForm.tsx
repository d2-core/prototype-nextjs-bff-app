import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Rating,
  Grid,
  FormControl,
  FormLabel,
  FormHelperText,
  Divider,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material'
import { ArrowBack, Save } from '@mui/icons-material'
import { useState } from 'react'
import Link from 'next/link'

// 평가 카테고리
const RATING_CATEGORIES = [
  {
    id: 'content',
    label: 'Course Content',
    description: 'Quality and depth of the course material',
  },
  {
    id: 'instructor',
    label: 'Instructor',
    description: 'Teaching style and effectiveness',
  },
  {
    id: 'materials',
    label: 'Learning Materials',
    description: 'Quality of exercises, assignments, and resources',
  },
  {
    id: 'support',
    label: 'Student Support',
    description: 'Responsiveness to questions and issues',
  },
]

interface ReviewForm {
  overallRating: number
  categoryRatings: {
    content: number
    instructor: number
    materials: number
    support: number
  }
  title: string
  review: string
  progress: number
}

interface Props {
  reviewId?: number
}

function ReviewForm({ reviewId }: Props) {
  const [formData, setFormData] = useState<ReviewForm>({
    overallRating: 0,
    categoryRatings: {
      content: 0,
      instructor: 0,
      materials: 0,
      support: 0,
    },
    title: '',
    review: '',
    progress: 0,
  })

  const [errors, setErrors] = useState({
    overallRating: '',
    title: '',
    review: '',
  })

  const [showExitDialog, setShowExitDialog] = useState(false)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)

  const validateForm = () => {
    const newErrors = {
      overallRating: '',
      title: '',
      review: '',
    }

    if (formData.overallRating === 0) {
      newErrors.overallRating = 'Overall rating is required'
    }

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    } else if (formData.title.length < 10) {
      newErrors.title = 'Title must be at least 10 characters long'
    }

    if (!formData.review.trim()) {
      newErrors.review = 'Review content is required'
    } else if (formData.review.length < 50) {
      newErrors.review = 'Review must be at least 50 characters long'
    }

    setErrors(newErrors)
    return Object.values(newErrors).every((error) => !error)
  }

  const handleSubmit = () => {
    if (validateForm()) {
      // Submit logic here
      console.log('Submitting:', formData)
      setShowSuccessAlert(true)
      // Reset form or redirect
    }
  }

  const handleCategoryRatingChange = (
    category: string,
    value: number | null,
  ) => {
    setFormData((prev) => ({
      ...prev,
      categoryRatings: {
        ...prev.categoryRatings,
        [category]: value || 0,
      },
    }))
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Link href="/courses/some-course">
            <Button startIcon={<ArrowBack />}>Back to Course</Button>
          </Link>
          <Typography variant="h4" mt={2}>
            Write a Review
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            for "Advanced React Development"
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => setShowExitDialog(true)}
            sx={{ mr: 2 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            startIcon={<Save />}
          >
            Post Review
          </Button>
        </Box>
      </Box>

      {/* Success Alert */}
      {showSuccessAlert && (
        <Alert
          severity="success"
          onClose={() => setShowSuccessAlert(false)}
          sx={{ mb: 3 }}
        >
          Your review has been posted successfully!
        </Alert>
      )}

      <Grid container spacing={3}>
        {/* Main Form */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              {/* Overall Rating */}
              <FormControl
                error={!!errors.overallRating}
                sx={{ width: '100%', mb: 4 }}
              >
                <FormLabel component="legend">
                  <Typography variant="h6" gutterBottom>
                    Overall Rating
                  </Typography>
                </FormLabel>
                <Box display="flex" alignItems="center" gap={2}>
                  <Rating
                    name="overall-rating"
                    value={formData.overallRating}
                    onChange={(_, value) =>
                      setFormData((prev) => ({
                        ...prev,
                        overallRating: value || 0,
                      }))
                    }
                    size="large"
                    precision={0.5}
                  />
                  <Typography variant="h5" color="primary">
                    {formData.overallRating}
                  </Typography>
                </Box>
                {errors.overallRating && (
                  <FormHelperText>{errors.overallRating}</FormHelperText>
                )}
              </FormControl>

              <Divider sx={{ my: 3 }} />

              {/* Category Ratings */}
              <Typography variant="h6" gutterBottom>
                Detailed Ratings
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {RATING_CATEGORIES.map((category) => (
                  <Grid item xs={12} sm={6} key={category.id}>
                    <FormControl sx={{ width: '100%' }}>
                      <FormLabel>
                        <Typography variant="subtitle1">
                          {category.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          gutterBottom
                        >
                          {category.description}
                        </Typography>
                      </FormLabel>
                      <Box display="flex" alignItems="center" gap={2}>
                        <Rating
                          name={`rating-${category.id}`}
                          value={
                            formData.categoryRatings[
                              category.id as keyof typeof formData.categoryRatings
                            ]
                          }
                          onChange={(_, value) =>
                            handleCategoryRatingChange(category.id, value)
                          }
                          size="medium"
                          precision={0.5}
                        />
                        <Typography>
                          {
                            formData.categoryRatings[
                              category.id as keyof typeof formData.categoryRatings
                            ]
                          }
                        </Typography>
                      </Box>
                    </FormControl>
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ my: 3 }} />

              {/* Review Title & Content */}
              <TextField
                fullWidth
                label="Review Title"
                placeholder="Summarize your experience"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                error={!!errors.title}
                helperText={errors.title}
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                multiline
                rows={8}
                label="Your Review"
                placeholder="What did you like or dislike? What were your key takeaways? What was most helpful for your learning?"
                value={formData.review}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    review: e.target.value,
                  }))
                }
                error={!!errors.review}
                helperText={
                  errors.review || `${formData.review.length}/1000 characters`
                }
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Tips Sidebar */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Tips for writing a great review
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Typography variant="subtitle2" gutterBottom>
                Be specific
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Your review should help others make better decisions. Explain
                what you liked, what you didn't like, and what you learned.
              </Typography>

              <Typography variant="subtitle2" gutterBottom>
                Be honest
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                We welcome honest feedback that can help improve the course.
                Avoid personal attacks or disrespectful comments.
              </Typography>

              <Typography variant="subtitle2" gutterBottom>
                Be constructive
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Focus on sharing insights that could be helpful for future
                students or course improvement.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Exit Confirmation Dialog */}
      <Dialog open={showExitDialog} onClose={() => setShowExitDialog(false)}>
        <DialogTitle>Leave page?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have unsaved changes. Are you sure you want to leave this page?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowExitDialog(false)}>Stay</Button>
          <Button
            onClick={() => {
              setShowExitDialog(false)
              // Redirect logic here
            }}
            color="error"
          >
            Leave
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default ReviewForm

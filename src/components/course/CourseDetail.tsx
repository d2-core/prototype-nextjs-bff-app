import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Paper,
} from '@mui/material'
import {
  PlayCircle,
  Assignment,
  QuestionAnswer,
  ExpandMore,
  Check,
  Schedule,
  Language as LanguageIcon,
  Update,
  ThumbUp,
} from '@mui/icons-material'
import Link from 'next/link'
import { Course } from '@/models/course'

interface Props {
  courseId: number
}

function CourseDetail({ courseId }: Props) {
  // In a real application, fetch course data using the ID
  const course: Course = {
    id: '1',
    title: 'Complete React Development with TypeScript',
    thumbnail: '/images/react-course.jpg',
    teacherName: 'Dr. Sarah Johnson',
    teacherImage: '/images/sarah.jpg',
    teacherId: 'teacher1',
    level: 'intermediate',
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 350,
    isHot: true,
    discountRate: 35,
    description: 'Master modern React development with TypeScript...',
    category: ['Programming', 'Web Development', 'Frontend'],
    language: 'English',
    lastUpdated: '2024-01-15',
    duration: {
      hours: 32,
      minutes: 45,
    },
    totalLessons: 185,
    enrolled: 2500,
    syllabus: [
      {
        sectionTitle: 'Getting Started with React',
        lessons: [
          {
            id: 'l1',
            title: 'Introduction to React',
            duration: '15:30',
            isFree: true,
            type: 'video',
          },
          {
            id: 'l2',
            title: 'Setting up Development Environment',
            duration: '20:45',
            type: 'video',
          },
        ],
      },
      {
        sectionTitle: 'TypeScript Fundamentals',
        lessons: [
          {
            id: 'l3',
            title: 'TypeScript Basics Quiz',
            duration: '30:00',
            type: 'quiz',
          },
        ],
      },
    ],
    learningOutcomes: [
      'Build complex React applications using TypeScript',
      'Implement state management with Redux Toolkit',
      'Create reusable custom hooks and components',
      'Master React performance optimization techniques',
    ],
    requirements: [
      'Basic JavaScript knowledge',
      'Understanding of HTML and CSS',
      'Familiarity with web development concepts',
    ],
    targetAudience: [
      'Web developers looking to learn React',
      'JavaScript developers wanting to transition to TypeScript',
      'Frontend developers seeking to upgrade their skills',
    ],
    features: {
      certificateProvided: true,
      lifetimeAccess: true,
      downloadableResources: 45,
      liveQA: true,
      mobileAccess: true,
      assignments: true,
    },
    reviews: [
      {
        id: 'r1',
        userName: 'John Doe',
        userImage: '/images/john.jpg',
        rating: 5,
        date: '2024-01-10',
        comment: 'Excellent course! The content is well-structured...',
        helpful: 25,
      },
    ],
    faqs: [
      {
        question: 'Is this course suitable for beginners?',
        answer: 'While some basic JavaScript knowledge is recommended...',
      },
    ],
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Course Header */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Box mb={2}>
                  {course.category.map((cat) => (
                    <Chip
                      key={cat}
                      label={cat}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
                <Typography variant="h4" gutterBottom>
                  {course.title}
                </Typography>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Rating value={course.rating} readOnly precision={0.1} />
                  <Typography variant="body2">
                    ({course.reviewCount} reviews)
                  </Typography>
                  <Typography variant="body2">
                    {course.enrolled} students enrolled
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Box display="flex" alignItems="center">
                    <Avatar src={course.teacherImage} sx={{ mr: 1 }} />
                    <Link href={`/teachers/${course.teacherId}`}>
                      <Typography variant="subtitle1">
                        {course.teacherName}
                      </Typography>
                    </Link>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <LanguageIcon fontSize="small" />
                    <Typography variant="body2">{course.language}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Update fontSize="small" />
                    <Typography variant="body2">
                      Updated{' '}
                      {new Date(course.lastUpdated).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Box mb={2}>
                      {course.discountRate && (
                        <Chip
                          label={`${course.discountRate}% off`}
                          color="error"
                          size="small"
                          sx={{ mb: 1 }}
                        />
                      )}
                      <Typography variant="h4" gutterBottom>
                        ${course.price}
                      </Typography>
                      {course.originalPrice && (
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          sx={{ textDecoration: 'line-through' }}
                        >
                          ${course.originalPrice}
                        </Typography>
                      )}
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      sx={{ mb: 2 }}
                    >
                      Enroll Now
                    </Button>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <Schedule fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={`${course.duration.hours}h ${course.duration.minutes}m`}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PlayCircle fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={`${course.totalLessons} lessons`}
                        />
                      </ListItem>
                      {Object.entries(course.features).map(
                        ([key, value]) =>
                          value && (
                            <ListItem key={key}>
                              <ListItemIcon>
                                <Check fontSize="small" />
                              </ListItemIcon>
                              <ListItemText
                                primary={key
                                  .replace(/([A-Z])/g, ' $1')
                                  .replace(/^./, (str) => str.toUpperCase())}
                              />
                            </ListItem>
                          ),
                      )}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8}>
          {/* Description */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Description
              </Typography>
              <Typography variant="body1" paragraph>
                {course.description}
              </Typography>
            </CardContent>
          </Card>

          {/* Learning Outcomes */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                What you'll learn
              </Typography>
              <Grid container spacing={2}>
                {course.learningOutcomes.map((outcome, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box display="flex" gap={1}>
                      <Check color="primary" />
                      <Typography variant="body1">{outcome}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          {/* Course Content */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Course Content
              </Typography>
              {course.syllabus.map((section, index) => (
                <Accordion key={index}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="subtitle1">
                      {section.sectionTitle}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      {section.lessons.map((lesson) => (
                        <ListItem key={lesson.id}>
                          <ListItemIcon>
                            {lesson.type === 'video' ? (
                              <PlayCircle />
                            ) : lesson.type === 'quiz' ? (
                              <QuestionAnswer />
                            ) : (
                              <Assignment />
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={lesson.title}
                            secondary={`${lesson.duration} ${
                              lesson.isFree ? '• Preview available' : ''
                            }`}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Student Reviews
              </Typography>
              {course.reviews.map((review) => (
                <Box key={review.id} mb={3}>
                  <Box display="flex" alignItems="center" gap={2} mb={1}>
                    <Avatar src={review.userImage} />
                    <Box>
                      <Typography variant="subtitle1">
                        {review.userName}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {new Date(review.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={review.rating} readOnly size="small" />
                  <Typography variant="body1" mt={1}>
                    {review.comment}
                  </Typography>
                  <Button size="small" startIcon={<ThumbUp />} sx={{ mt: 1 }}>
                    Helpful ({review.helpful})
                  </Button>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* Requirements */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Requirements
              </Typography>
              <List dense>
                {course.requirements.map((req, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Check fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={req} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          {/* Target Audience */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Who this course is for
              </Typography>
              <List dense>
                {course.targetAudience.map((audience, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Check fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={audience} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          {/* FAQs */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Frequently Asked Questions
              </Typography>
              {course.faqs.map((faq, index) => (
                <Accordion key={index} elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="subtitle1">{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CourseDetail

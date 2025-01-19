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
} from '@mui/icons-material'
import Link from 'next/link'
import ReviewListItem from '../review/ReviewListItem'
import ListDirection from '../shared/ListDirection'
import useUser from '@/hooks/useUser'
import { useMutation } from 'react-query'
import { registerCouresStudent } from '@/remote/api/student'
import { useLoginModalContext } from '@/contexts/LoginModalContext'
import { useRouter } from 'next/router'
import { courseDumy, courses, questions, reviews } from '@/utils/dummy'
import Spacing from '../shared/Spacing'
import QuestionListItem from '../question/QuestionListItem'

interface Props {
  courseId: number
}

function CourseDetail({ courseId }: Props) {
  const { user } = useUser()
  const { open } = useLoginModalContext()
  const route = useRouter()
  const course = courseDumy

  const registerCourseStudentMutation = useMutation(
    ['register-course-student', course.id],
    registerCouresStudent,
    {
      onSuccess: () => route.push('/my/courses'),
    },
  )

  const handleRegisterCourseStuent = (courseId: number) => {
    if (user) {
      registerCourseStudentMutation.mutate({ courseId: courseId })
    } else {
      open()
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
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
            <Box display="flex" alignItems="center" gap={2}>
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
                  Updated {new Date(course.lastUpdated).toLocaleDateString()}
                </Typography>
              </Box>
            </Box>
          </Paper>

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

          <Card>
            <CardContent>
              <ListDirection
                title="강의 리뷰"
                length={reviews.length}
                routePath={`/courses/${course.id}/reviews`}
              />
              <List>
                {reviews.slice(0, 2).map((review) => (
                  <Box component={'ul'} key={review.id}>
                    <Card>
                      <CardContent>
                        <ReviewListItem review={review} truncate />
                      </CardContent>
                    </Card>
                    <Spacing />
                  </Box>
                ))}
              </List>
              <Spacing />
              <ListDirection
                title="강의 질문"
                length={questions.length}
                routePath={`/courses/${course.id}/questions`}
              />
              <List>
                {questions.slice(0, 2).map((question) => (
                  <Box component={'ul'} key={question.id}>
                    <Card>
                      <CardContent>
                        <QuestionListItem question={question} />
                      </CardContent>
                    </Card>
                    <Spacing />
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ position: 'sticky', top: 24, mb: 3 }}>
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
                  onClick={() => handleRegisterCourseStuent(course.id)}
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
                      primary={`${course.duration?.hours}h ${course.duration?.minutes}m`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PlayCircle fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={`${course.totalLessons} lessons`} />
                  </ListItem>
                  {course.features &&
                    Object.entries(course.features).map(
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
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CourseDetail

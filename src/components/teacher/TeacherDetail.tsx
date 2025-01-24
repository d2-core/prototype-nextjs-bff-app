import {
  GitHub,
  Language,
  LinkedIn,
  Schedule,
  School,
  WorkHistory,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Rating,
  Typography,
} from '@mui/material'
import CourseCard from '../course/CourseCard'
import Spacing from '../shared/Spacing'
import { useRouter } from 'next/router'
import ReviewListItem from '../review/ReviewListItem'
import ListDirection from '../shared/ListDirection'
import { Review } from '@/models/review'
import { courses, reviews, teacherCourses, teachers } from '@/utils/dummy'

interface Props {
  teacherId: number
}

function TeacherDetail({ teacherId }: Props) {
  const route = useRouter()
  const teacher = teachers[0]
  const handleRouteReviewPage = () => {
    route.push(`/teachers/${teacher.id}/reviewss`)
  }

  const handleRouteQuestion = () => {
    route.push(`/teachers/${teacher.id}/questions`)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Profile Header */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={3} alignItems="center">
                <Grid item>
                  <Box
                    component={'img'}
                    src={teacher.profileImageUrl}
                    alt={teacher.nickname}
                    sx={{ width: 120, height: 120 }}
                  />
                </Grid>
                <Grid item xs>
                  <Typography variant="h4" gutterBottom>
                    {teacher.nickname}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1} mb={2}>
                    <Rating
                      value={teacher?.statics?.courseTotalAverageRatings}
                      readOnly
                      precision={0.1}
                    />
                    <Typography variant="body2">
                      ({teacher?.statics?.totalReviewCount} reviews)
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1}>
                    {teacher.socialLinks?.linkedin && (
                      <Link href={teacher.socialLinks.linkedin} target="_blank">
                        <LinkedIn />
                      </Link>
                    )}
                    {teacher.socialLinks?.github && (
                      <Link href={teacher.socialLinks.github} target="_blank">
                        <GitHub />
                      </Link>
                    )}
                    {teacher.socialLinks?.website && (
                      <Link href={teacher.socialLinks.website} target="_blank">
                        <Language />
                      </Link>
                    )}
                  </Box>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Book a Session
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          {/* About */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" paragraph>
                {teacher.description}
              </Typography>
              <Box mt={2}>
                <Typography variant="h6" gutterBottom>
                  Expertise
                </Typography>
                <Box display="flex" gap={1} flexWrap="wrap">
                  {teacher.expertises.map((skill) => (
                    <Chip key={skill} label={skill} />
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <WorkHistory sx={{ mr: 1 }} />
                Experience
              </Typography>
              <List>
                {teacher.experiences.map((exp, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={exp} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <School sx={{ mr: 1 }} />
                Education
              </Typography>
              <List>
                {teacher.educations.map((edu, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={edu.degree}
                      secondary={`${edu.institution} (${edu.year})`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Statistics
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h4">
                    {teacher?.statics?.courseCount}
                  </Typography>
                  <Typography color="textSecondary">Courses</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h4">
                    {teacher?.statics?.sutdentCount}
                  </Typography>
                  <Typography color="textSecondary">Students</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Schedule sx={{ mr: 1 }} />
                  <Typography variant="h6">{`선생님 공지사항 (3)`}</Typography>
                </Box>
                <Button
                  onClick={() => route.push(`/teachers/${teacher.id}/notices`)}
                >
                  더보기
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Schedule sx={{ mr: 1 }} />
                  <Typography variant="h6">{`선생님 질문 (3)`}</Typography>
                </Box>
                <Button
                  onClick={() =>
                    route.push(`/teachers/${teacher.id}/questions`)
                  }
                >
                  더보기
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Spacing />
      <ReviewSection teahcerId={teacher.id} reviews={reviews} />

      <Spacing />

      <Card>
        <CardContent>
          <ListDirection
            title="선생님 강의"
            length={courses.length}
            routePath={`/teachers/${teacher.id}/courses`}
          />
          <Spacing />
          {teacherCourses.slice(0, 3).map((teacherCourse) => (
            <Box>
              <CourseCard
                key={teacherCourse.id}
                teacherCourse={teacherCourse}
              />
              <Spacing />
            </Box>
          ))}
        </CardContent>
      </Card>
    </Container>
  )
}
interface ReviewSectionProps {
  teahcerId: number
  reviews: Review[]
}

function ReviewSection({ teahcerId, reviews }: ReviewSectionProps) {
  return (
    <Card>
      <CardContent>
        <ListDirection
          title="선생님 리뷰"
          length={reviews.length}
          routePath={`/teachers/${teahcerId}/reviews`}
        />
        <Grid container spacing={2}>
          {reviews.slice(0, 3).map((review) => (
            <Grid item xs={12} md={6} key={review.id}>
              <Card>
                <CardContent>
                  <ReviewListItem review={review} truncate />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TeacherDetail

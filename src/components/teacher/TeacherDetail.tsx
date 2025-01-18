import { Teacher } from '@/models/teacher'
import {
  GitHub,
  Language,
  LinkedIn,
  Schedule,
  School,
  WorkHistory,
} from '@mui/icons-material'
import {
  Avatar,
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
import { Course } from '@/models/course'
import { useRouter } from 'next/router'
import ReviewListItem from '../review/ReviewListItem'
import { Review } from '../review/Review'
import ListDirection from '../shared/ListDirection'

const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    thumbnail: '/course1.jpg',
    teacherName: 'John Doe',
    teacherImage: '/profile1.jpg',
    teacherId: '1',
    level: 'beginner',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 1250,
    isNew: true,
    isHot: true,
    discountRate: 50,
    description:
      'Comprehensive web development course covering frontend and backend',
    category: ['Web Development', 'JavaScript', 'React'],
    language: 'English',
    lastUpdated: '2024-01-15',
    syllabus: [],
    learningOutcomes: [],
    requirements: [],
    targetAudience: [],
    reviews: [],
    faqs: [],
  },
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    thumbnail: '/course1.jpg',
    teacherName: 'John Doe',
    teacherImage: '/profile1.jpg',
    teacherId: '1',
    level: 'beginner',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 1250,
    isNew: true,
    isHot: true,
    discountRate: 50,
    description:
      'Comprehensive web development course covering frontend and backend',
    category: ['Web Development', 'JavaScript', 'React'],
    language: 'English',
    lastUpdated: '2024-01-15',
    syllabus: [],
    learningOutcomes: [],
    requirements: [],
    targetAudience: [],
    reviews: [],
    faqs: [],
  },
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    thumbnail: '/course1.jpg',
    teacherName: 'John Doe',
    teacherImage: '/profile1.jpg',
    teacherId: '1',
    level: 'beginner',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 1250,
    isNew: true,
    isHot: true,
    discountRate: 50,
    description:
      'Comprehensive web development course covering frontend and backend',
    category: ['Web Development', 'JavaScript', 'React'],
    language: 'English',
    lastUpdated: '2024-01-15',
    syllabus: [],
    learningOutcomes: [],
    requirements: [],
    targetAudience: [],
    reviews: [],
    faqs: [],
  },
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    thumbnail: '/course1.jpg',
    teacherName: 'John Doe',
    teacherImage: '/profile1.jpg',
    teacherId: '1',
    level: 'beginner',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 1250,
    isNew: true,
    isHot: true,
    discountRate: 50,
    description:
      'Comprehensive web development course covering frontend and backend',
    category: ['Web Development', 'JavaScript', 'React'],
    language: 'English',
    lastUpdated: '2024-01-15',
    syllabus: [],
    learningOutcomes: [],
    requirements: [],
    targetAudience: [],
    reviews: [],
    faqs: [],
  },
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    thumbnail: '/course1.jpg',
    teacherName: 'John Doe',
    teacherImage: '/profile1.jpg',
    teacherId: '1',
    level: 'beginner',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 1250,
    isNew: true,
    isHot: true,
    discountRate: 50,
    description:
      'Comprehensive web development course covering frontend and backend',
    category: ['Web Development', 'JavaScript', 'React'],
    language: 'English',
    lastUpdated: '2024-01-15',
    syllabus: [],
    learningOutcomes: [],
    requirements: [],
    targetAudience: [],
    reviews: [],
    faqs: [],
  },
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    thumbnail: '/course1.jpg',
    teacherName: 'John Doe',
    teacherImage: '/profile1.jpg',
    teacherId: '1',
    level: 'beginner',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 1250,
    isNew: true,
    isHot: true,
    discountRate: 50,
    description:
      'Comprehensive web development course covering frontend and backend',
    category: ['Web Development', 'JavaScript', 'React'],
    language: 'English',
    lastUpdated: '2024-01-15',
    syllabus: [],
    learningOutcomes: [],
    requirements: [],
    targetAudience: [],
    reviews: [],
    faqs: [],
  },
]

interface Props {
  teacherId: number
}

function TeacherDetail({ teacherId }: Props) {
  const teacher: Teacher = {
    id: '1',
    name: 'John Doe',
    profileImage: '/profile1.jpg',
    role: 'Senior Developer',
    expertise: ['React', 'TypeScript', 'Node.js'],
    experience: ['10+ years in web development', 'Former Tech Lead at Google'],
    description:
      'Passionate about teaching web development and helping others grow.',
    courses: 5,
    students: 1200,
    rating: 4.8,
    reviews: 150,
    socialLinks: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      website: 'https://example.com',
    },
    education: [],
    certificates: [],
    languages: [],
    achievements: [],
    upcomingCourses: [],
    availableTimeSlots: [],
  }
  const route = useRouter()
  const handleRouteReviewPage = () => {
    route.push('/review')
  }

  const handleRouteQuestion = () => {
    route.push('/question')
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
                  <Avatar
                    src={teacher.profileImage}
                    sx={{ width: 120, height: 120 }}
                  />
                </Grid>
                <Grid item xs>
                  <Typography variant="h4" gutterBottom>
                    {teacher.name}
                  </Typography>
                  <Typography variant="h6" color="textSecondary" gutterBottom>
                    {teacher.role}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1} mb={2}>
                    <Rating value={teacher.rating} readOnly precision={0.1} />
                    <Typography variant="body2">
                      ({teacher.reviews} reviews)
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
                  {teacher.expertise.map((skill) => (
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
                {teacher.experience.map((exp, index) => (
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
                {teacher.education.map((edu, index) => (
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

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* Stats */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Statistics
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h4">{teacher.courses}</Typography>
                  <Typography color="textSecondary">Courses</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h4">{teacher.students}</Typography>
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
                <Button onClick={() => route.push('/teacher/notice')}>
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
                <Button onClick={() => route.push('/question')}>더보기</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Spacing />
      <ReviewSection reviews={DUMMY_REVIEWS} />

      <Spacing />

      <Card>
        <CardContent>
          <ListDirection title="선생님 강의" routePath="/course" />
          <Spacing />
          {sampleCourses.map((course) => (
            <Box>
              <CourseCard key={course.id} course={course} />
              <Spacing />
            </Box>
          ))}
        </CardContent>
      </Card>
    </Container>
  )
}
interface ReviewSectionProps {
  reviews: Review[]
}

function ReviewSection({ reviews }: ReviewSectionProps) {
  return (
    <Card>
      <CardContent>
        <ListDirection title="선생님 리뷰" routePath="/review" />
        <Grid container spacing={2}>
          {reviews.slice(0, 5).map((review) => (
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

const DUMMY_REVIEWS: Review[] = [
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
    comment: `The best UX design course I've taken so far.'`,
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

export default TeacherDetail

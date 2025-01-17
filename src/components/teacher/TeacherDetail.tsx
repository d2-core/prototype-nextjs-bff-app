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

          {/* Experience */}
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

          {/* Education */}
          <Card sx={{ mb: 3 }}>
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

          {/* Upcoming Courses */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Courses
              </Typography>
              {teacher.upcomingCourses.map((course) => (
                <Box key={course.id} mb={2}>
                  <Typography variant="subtitle1">{course.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Starts: {new Date(course.startDate).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Duration: {course.duration}
                  </Typography>
                  <Typography variant="body2">
                    {course.enrolled}/{course.maxCapacity} enrolled
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>

          {/* Available Time Slots */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <Schedule sx={{ mr: 1 }} />
                Available Time Slots
              </Typography>
              {teacher.availableTimeSlots.map((slot) => (
                <Box key={slot.day} mb={2}>
                  <Typography variant="subtitle1">{slot.day}</Typography>
                  <Box display="flex" gap={1} flexWrap="wrap">
                    {slot.times.map((time) => (
                      <Chip key={time} label={time} size="small" />
                    ))}
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TeacherDetail

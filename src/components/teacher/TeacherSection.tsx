import { Box, Container, Button, Grid } from '@mui/material'
import TeacherSectionFilter from './TeacherSectionFilter'
import { Teacher } from '@/models/teacher'
import TeacherCtaSection from '../cta/TeacherCtaSection'
import TeacherSectionHeader from './TeacherSectionHeader'
import Spacing from '../shared/Spacing'
import { useRouter } from 'next/router'
import TeacherCard from './TeacherCard'

const teachers: Teacher[] = [
  {
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
  },
]

function TeacherSection() {
  const route = useRouter()
  const handleTeacherPageRoute = () => {
    route.push('/teacher')
  }
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <TeacherSectionHeader />
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <TeacherSectionFilter />
          <Grid container spacing={4}>
            {teachers.map((teacher) => (
              <Grid item xs={12} sm={6} md={4} key={teacher.id}>
                <TeacherCard teacher={teacher} />
              </Grid>
            ))}
          </Grid>
          <Spacing size={16} />
          <Button onClick={handleTeacherPageRoute}>선생님 더 둘러보기</Button>
        </Box>
        <TeacherCtaSection />
      </Container>
    </Box>
  )
}

export default TeacherSection

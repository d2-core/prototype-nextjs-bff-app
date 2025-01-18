import { Teacher as ITeacher } from '@/models/teacher'
import { useState } from 'react'
import { Container, Grid, Box } from '@mui/material'
import TeacherCard from './TeacherCard'
import Spacing from '../shared/Spacing'
import TeacherFilter from './TeacherFilter'

const sampleTeachers: ITeacher[] = [
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
function Teacher() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([])
  const [minRating, setMinRating] = useState<number | null>(null)

  const allExpertise = Array.from(
    new Set(sampleTeachers.flatMap((teacher) => teacher.expertise)),
  )

  const filteredTeachers = sampleTeachers.filter((teacher) => {
    const matchesSearch = teacher.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesExpertise =
      selectedExpertise.length === 0 ||
      selectedExpertise.some((exp) => teacher.expertise.includes(exp))
    const matchesRating = !minRating || teacher.rating >= minRating

    return matchesSearch && matchesExpertise && matchesRating
  })
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
  }

  // 전문분야 변경 핸들러
  const handleExpertiseChange = (expertise: string[]) => {
    setSelectedExpertise(expertise)
  }

  // 평점 변경 핸들러
  const handleRatingChange = (rating: number | null) => {
    setMinRating(rating)
  }
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* Filters Section */}
        <TeacherFilter
          searchTerm={searchTerm}
          selectedExpertise={selectedExpertise}
          minRating={minRating}
          allExpertise={allExpertise}
          onSearchChange={handleSearchChange}
          onExpertiseChange={handleExpertiseChange}
          onRatingChange={handleRatingChange}
        />

        <Grid item xs={12} md={9}>
          {sampleTeachers.map((teacher) => (
            <Box>
              <TeacherCard teacher={teacher} />
              <Spacing />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Teacher

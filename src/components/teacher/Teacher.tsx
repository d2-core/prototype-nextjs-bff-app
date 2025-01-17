import { Teacher as ITeacher } from '@/models/teacher'
import { useState } from 'react'
import {
  Container,
  Grid,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Rating,
  Paper,
} from '@mui/material'
import { Search } from '@mui/icons-material'
import TeacherCard from './TeacherCard'

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
  // Add more sample data...
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
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* Filters Section */}
        <Grid item xs={12} md={3}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              position: 'sticky',
              top: 16,
              maxHeight: 'calc(100vh - 32px)',
              overflowY: 'auto',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Filters
            </Typography>

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search teachers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <Search sx={{ color: 'text.secondary', mr: 1 }} />
                ),
              }}
              sx={{ mb: 3 }}
            />

            <Typography variant="subtitle1" gutterBottom>
              Expertise
            </Typography>
            <FormGroup sx={{ mb: 3 }}>
              {allExpertise.map((exp) => (
                <FormControlLabel
                  key={exp}
                  control={
                    <Checkbox
                      checked={selectedExpertise.includes(exp)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedExpertise([...selectedExpertise, exp])
                        } else {
                          setSelectedExpertise(
                            selectedExpertise.filter((item) => item !== exp),
                          )
                        }
                      }}
                      size="small"
                    />
                  }
                  label={exp}
                />
              ))}
            </FormGroup>

            <Typography variant="subtitle1" gutterBottom>
              Minimum Rating
            </Typography>
            <Rating
              value={minRating}
              onChange={(_, value) => setMinRating(value)}
              precision={0.5}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          {filteredTeachers.map((teacher) => (
            <TeacherCard teacher={teacher} />
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Teacher

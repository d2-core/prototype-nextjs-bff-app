import { ReactNode, useState } from 'react'
import { Container, Grid, Box } from '@mui/material'
import TeacherCard from './TeacherCard'
import Spacing from '../shared/Spacing'
import TeacherFilter from './TeacherFilter'
import { Teacher as ITeacher } from '@/models/teacher'
import ListDirection from '../shared/ListDirection'

interface Props {
  teachers: ITeacher[]
  title?: ReactNode
}

function Teacher({ teachers, title }: Props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([])
  const [minRating, setMinRating] = useState<number | null>(null)

  const allExpertise = Array.from(
    new Set(teachers.flatMap((teacher) => teacher.expertises)),
  )

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch = teacher.nickname
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    return matchesSearch
  })
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
  }

  const handleExpertiseChange = (expertise: string[]) => {
    setSelectedExpertise(expertise)
  }

  const handleRatingChange = (rating: number | null) => {
    setMinRating(rating)
  }
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
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
          {title && <ListDirection title={title} length={teachers.length} />}
          {teachers.map((teacher) => (
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

import { Box, Container, Grid } from '@mui/material'
import { ReactNode, useState } from 'react'
import CourseCard from './CourseCard'
import Spacing from '../shared/Spacing'
import CourseFilter from './CourseFilter'
import ListDirection from '../shared/ListDirection'
import { TeacherCourse } from '@/models/teacher'

interface Props {
  teacherCourses: TeacherCourse[]
  title?: ReactNode
}

function Course({ teacherCourses, title }: Props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevel, setSelectedLevel] = useState<string>('')
  const [minRating, setMinRating] = useState<number | null>(null)

  const filteredCourses = teacherCourses.filter((teacherCourse) => {
    const matchesSearch =
      teacherCourse.title ?? ''.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesSearch
  })

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <CourseFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          selectedCategories={selectedCategories}
          onCategoriesChange={setSelectedCategories}
          allCategories={['React', 'JavaScript', 'TypeScript']}
          minRating={minRating}
          onRatingChange={setMinRating}
        />

        <Grid item xs={12} md={9}>
          {title && (
            <ListDirection title={title} length={teacherCourses.length} />
          )}
          {filteredCourses.map((teacherCourse) => (
            <Box>
              <CourseCard
                key={teacherCourse.id}
                teacherCourse={teacherCourse}
              />
              <Spacing />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Course

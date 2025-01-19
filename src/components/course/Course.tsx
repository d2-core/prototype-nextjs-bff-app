import { Box, Container, Grid, Typography } from '@mui/material'
import { ReactNode, useState } from 'react'
import CourseCard from './CourseCard'
import { Course as ICourse } from '@models/course'
import Spacing from '../shared/Spacing'
import CourseFilter from './CourseFilter'
import ListDirection from '../shared/ListDirection'

interface Props {
  courses: ICourse[]
  title?: ReactNode
}

function Course({ courses, title }: Props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevel, setSelectedLevel] = useState<string>('')
  const [minRating, setMinRating] = useState<number | null>(null)

  const allCategories = Array.from(
    new Set(courses.flatMap((course) => course.category)),
  )

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesCategories =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => course.category.includes(cat))
    const matchesLevel = !selectedLevel || course.level === selectedLevel
    const matchesRating = !minRating || course.rating >= minRating

    return matchesSearch && matchesCategories && matchesLevel && matchesRating
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
          {title && <ListDirection title={title} length={courses.length} />}
          {filteredCourses.map((course) => (
            <Box>
              <CourseCard key={course.id} course={course} />
              <Spacing />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Course

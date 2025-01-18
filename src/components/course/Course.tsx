import { Box, Container, Grid } from '@mui/material'
import { useState } from 'react'
import CourseCard from './CourseCard'
import { Course as ICourse } from '@models/course'
import Spacing from '../shared/Spacing'
import CourseFilter from './CourseFilter'

const sampleCourses: ICourse[] = [
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

function Course() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevel, setSelectedLevel] = useState<string>('')
  const [minRating, setMinRating] = useState<number | null>(null)

  const allCategories = Array.from(
    new Set(sampleCourses.flatMap((course) => course.category)),
  )

  const filteredCourses = sampleCourses.filter((course) => {
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
          allCategories={['React', 'JavaScript', 'TypeScript']} // 실제 카테고리 목록
          minRating={minRating}
          onRatingChange={setMinRating}
        />

        {/* Course List Section */}
        <Grid item xs={12} md={9}>
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

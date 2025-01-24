import { Box, Typography } from '@mui/material'
import ScrollControl from '../shared/ScrollControl'
import CourseCard from './CourseCard'
import { TeacherCourse } from '@/models/teacher'
import Spacing from '../shared/Spacing'

interface Props {
  title: string
  teacherCourses: TeacherCourse[]
  scrollRef: React.RefObject<HTMLDivElement>
  onScroll: (direction: 'left' | 'right') => void
}

function CourseSideList({ title, teacherCourses, scrollRef, onScroll }: Props) {
  return (
    <Box sx={{ mb: 6 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <ScrollControl
          onLeft={() => onScroll('left')}
          onRight={() => onScroll('right')}
        />
      </Box>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          pb: 2,
        }}
      >
        {teacherCourses.map((teacherCourse) => (
          <Box display={'flex'}>
            <CourseCard
              key={teacherCourse.id}
              teacherCourse={teacherCourse}
              width="300px"
            />
            <Spacing direction="horizontal" />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default CourseSideList

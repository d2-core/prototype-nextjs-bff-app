import Course from '@/components/course/Course'
import TopNav from '@/components/shared/TopNav'
import { courses } from '@/utils/dummy'
import { Box } from '@mui/material'

function CoursePage() {
  return (
    <Box>
      <TopNav />
      <Course courses={courses} title="강의" />
    </Box>
  )
}

export default CoursePage

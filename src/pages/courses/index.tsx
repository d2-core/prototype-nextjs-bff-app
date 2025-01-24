import Course from '@/components/course/Course'
import TopNav from '@/components/shared/TopNav'
import { courses, teacherCourses } from '@/utils/dummy'
import { Box } from '@mui/material'

function CoursePage() {
  return (
    <Box>
      <TopNav />
      <Course teacherCourses={teacherCourses} title="강의" />
    </Box>
  )
}

export default CoursePage

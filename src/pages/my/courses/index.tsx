import Course from '@/components/course/Course'
import TopNav from '@/components/shared/TopNav'
import { courses, teacherCourses } from '@/utils/dummy'
import { Box } from '@mui/material'

function MyCoursePage() {
  return (
    <Box>
      <TopNav />
      <Course teacherCourses={teacherCourses} title="나의 강의실" />
    </Box>
  )
}

export default MyCoursePage

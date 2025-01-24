import Course from '@/components/course/Course'
import TopNav from '@/components/shared/TopNav'
import { courses, teacherCourses } from '@/utils/dummy'
import { Box } from '@mui/material'

function TeacherCouresPage() {
  return (
    <Box>
      <TopNav />
      <Course title={'선생님 강의'} teacherCourses={teacherCourses} />
    </Box>
  )
}

export default TeacherCouresPage

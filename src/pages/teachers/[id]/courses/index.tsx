import Course from '@/components/course/Course'
import TopNav from '@/components/shared/TopNav'
import { courses } from '@/utils/dummy'
import { Box } from '@mui/material'

function TeacherCouresPage() {
  return (
    <Box>
      <TopNav />
      <Course title={'선생님 강의'} courses={courses} />
    </Box>
  )
}

export default TeacherCouresPage

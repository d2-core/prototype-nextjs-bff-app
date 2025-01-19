import Course from '@/components/course/Course'
import TopNav from '@/components/shared/TopNav'
import { courses } from '@/utils/dummy'
import { Box } from '@mui/material'

function MyCoursePage() {
  return (
    <Box>
      <TopNav />
      <Course courses={courses} title="나의 강의실" />
    </Box>
  )
}

export default MyCoursePage

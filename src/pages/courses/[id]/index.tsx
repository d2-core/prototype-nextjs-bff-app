import CourseDetail from '@/components/course/CourseDetail'
import TopNav from '@/components/shared/TopNav'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

function CourseDetailPage() {
  const route = useRouter()
  const { id } = route.query
  return (
    <Box>
      <TopNav />
      <CourseDetail courseId={parseInt(id as string)} />
    </Box>
  )
}

export default CourseDetailPage

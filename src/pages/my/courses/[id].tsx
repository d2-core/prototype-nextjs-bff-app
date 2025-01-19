import TopNav from '@/components/shared/TopNav'
import StudentClassRoom from '@/components/student/StudentClassRoom'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

function MyCourseDetailPage() {
  const route = useRouter()
  const { id } = route.query
  return (
    <Box>
      <TopNav />
      <StudentClassRoom courseId={parseInt(id as string)} />
    </Box>
  )
}

export default MyCourseDetailPage

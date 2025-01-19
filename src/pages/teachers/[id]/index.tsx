import TopNav from '@/components/shared/TopNav'
import TeacherDetail from '@/components/teacher/TeacherDetail'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

function TeacherDetailPage() {
  const route = useRouter()
  const { id } = route.query
  return (
    <Box>
      <TopNav />
      <TeacherDetail teacherId={parseInt(id as string)} />
    </Box>
  )
}

export default TeacherDetailPage

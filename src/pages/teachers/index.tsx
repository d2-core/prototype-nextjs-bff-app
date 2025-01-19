import TopNav from '@/components/shared/TopNav'
import Teacher from '@/components/teacher/Teacher'
import { teachers } from '@/utils/dummy'
import { Box } from '@mui/material'

function TeacherPage() {
  return (
    <Box>
      <TopNav />
      <Teacher teachers={teachers} title="선생님" />
    </Box>
  )
}

export default TeacherPage

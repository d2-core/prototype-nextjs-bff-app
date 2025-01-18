import User from '@/components/auth/User'
import TopNav from '@/components/shared/TopNav'
import Student from '@/components/student/Student'
import { Box } from '@mui/material'

function Mypage() {
  return (
    <Box>
      <TopNav />
      <User />
      <Student />
    </Box>
  )
}

export default Mypage

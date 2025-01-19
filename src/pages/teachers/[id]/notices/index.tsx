import Notice from '@/components/notice/Notice'
import TopNav from '@/components/shared/TopNav'
import { notices } from '@/utils/dummy'
import { Box } from '@mui/material'

function TeacherNoticePage() {
  return (
    <Box>
      <TopNav />
      <Notice notices={notices} title="선생님 공지사항" />
    </Box>
  )
}

export default TeacherNoticePage

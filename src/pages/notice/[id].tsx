import NoticeDetail from '@/components/notice/NoticeDetail'
import TopNav from '@/components/shared/TopNav'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

function NoticeDetailPage() {
  const route = useRouter()
  const { id } = route.query
  return (
    <Box>
      <TopNav />
      <NoticeDetail noticeId={parseInt(id as string)} />
    </Box>
  )
}

export default NoticeDetailPage

import AlarmDetail from '@/components/alarm/AlarmDetail'
import TopNav from '@/components/shared/TopNav'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

function AlarmDetailPage() {
  const route = useRouter()
  const { id } = route.query
  return (
    <Box>
      <TopNav />
      <AlarmDetail alarmId={parseInt(id as string)} />
    </Box>
  )
}

export default AlarmDetailPage

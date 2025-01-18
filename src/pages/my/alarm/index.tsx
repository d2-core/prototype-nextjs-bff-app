import Alarm from '@/components/alarm/Alarm'
import TopNav from '@/components/shared/TopNav'
import { Box } from '@mui/material'

function MyAlarmPage() {
  return (
    <Box>
      <TopNav />
      <Alarm />
    </Box>
  )
}

export default MyAlarmPage
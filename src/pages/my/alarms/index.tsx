import Alarm from '@/components/alarm/Alarm'
import TopNav from '@/components/shared/TopNav'
import { alarams, notices } from '@/utils/dummy'
import { Box } from '@mui/material'

function MyAlarmPage() {
  return (
    <Box>
      <TopNav />
      <Alarm
        alarms={alarams}
        notices={notices}
        alarmTitle={'나의 알림'}
        noticeTitle={'나의 공지사항'}
      />
    </Box>
  )
}

export default MyAlarmPage

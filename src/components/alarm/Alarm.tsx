import React, { ReactNode, useState } from 'react'
import {
  Box,
  Container,
  Tabs,
  Tab,
  List,
  Card,
  CardContent,
  Divider,
} from '@mui/material'
import { Campaign, NotificationsActive } from '@mui/icons-material'
import EmptyCard from '../shared/EmptyCard'
import NoticeListItem from '../notice/NoticeListItem'
import AlarmListItem from './AlarmListItem'
import { Notice, Alarm as IAlarm } from '@/models/notice'
import TabPanel from '../shared/TabPanel'
import ListDirection from '../shared/ListDirection'

interface Props {
  alarms: IAlarm[]
  notices: Notice[]
  alarmTitle?: ReactNode
  noticeTitle?: ReactNode
}
function Alarm({ alarms, notices, alarmTitle, noticeTitle }: Props) {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="alarm tabs"
          variant="fullWidth"
        >
          <Tab
            icon={<NotificationsActive />}
            label="Notifications"
            iconPosition="start"
            sx={{ textTransform: 'none' }}
          />
          <Tab
            icon={<Campaign />}
            label="Notices"
            iconPosition="start"
            sx={{ textTransform: 'none' }}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Card>
          <CardContent>
            {alarmTitle && (
              <ListDirection title={alarmTitle} length={alarms.length} />
            )}
            <List sx={{ width: '100%' }}>
              {alarms.map((alarm, index) => (
                <Box key={alarm.id} component={'ul'}>
                  <AlarmListItem alarm={alarm} />
                  {index !== alarms.length - 1 && <Divider sx={{ my: 1 }} />}
                </Box>
              ))}
            </List>
            {alarms.length === 0 && (
              <EmptyCard title={'No new notifications'} />
            )}
          </CardContent>
        </Card>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Card>
          <CardContent>
            {noticeTitle && (
              <ListDirection title={noticeTitle} length={notices.length} />
            )}
            <List>
              {notices.map((notice, index) => (
                <Box component={'ul'}>
                  <NoticeListItem notice={notice} />
                  {index !== notices.length - 1 ? (
                    <Divider sx={{ my: 3 }} />
                  ) : null}
                </Box>
              ))}
            </List>
            {notices.length === 0 && <EmptyCard title={'No new notices'} />}
          </CardContent>
        </Card>
      </TabPanel>
    </Container>
  )
}

export default Alarm

import React, { useState } from 'react'
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
import { Notice, Alarm as IAarm } from '@/models/notice'
import TabPanel from '../shared/TabPanel'

function Alarm() {
  const [value, setValue] = useState(0)
  const [notices] = useState<Notice[]>([
    {
      id: 1,
      title: 'System Maintenance Notice',
      content: `We will be performing scheduled system maintenance to improve our services.
      During this time, all systems will be unavailable.
      Maintenance Schedule:
      - Start: January 20, 2024 2:00 AM EST
      - End: January 20, 2024 4:00 AM EST
      What to expect:
      1. Complete system downtime
      2. Automatic logout of all users
      3. Temporary service interruption
      Please save your work and log out before the maintenance begins.
      We apologize for any inconvenience this may cause.`,
      category: 'System',
      date: '2024-01-18',
      isImportant: true,
      author: 'System Admin',
      views: 245,
      attachments: [
        { name: 'maintenance_schedule.pdf', size: '524 KB' },
        { name: 'system_updates.docx', size: '128 KB' },
      ],
      isRead: false,
    },
    {
      id: 1,
      title: 'System Maintenance Notice',
      content: `We will be performing scheduled system maintenance to improve our services.
      During this time, all systems will be unavailable.
      Maintenance Schedule:
      - Start: January 20, 2024 2:00 AM EST
      - End: January 20, 2024 4:00 AM EST
      What to expect:
      1. Complete system downtime
      2. Automatic logout of all users
      3. Temporary service interruption
      Please save your work and log out before the maintenance begins.
      We apologize for any inconvenience this may cause.`,
      category: 'System',
      date: '2024-01-18',
      isImportant: true,
      author: 'System Admin',
      views: 245,
      attachments: [
        { name: 'maintenance_schedule.pdf', size: '524 KB' },
        { name: 'system_updates.docx', size: '128 KB' },
      ],
      isRead: false,
    },
  ])

  const [alarms, setAlarms] = useState<IAarm[]>([
    {
      id: 1,
      message: 'Your request has been approved',
      date: '2024-01-18 15:45',
      type: 'success',
      isRead: false,
    },
    {
      id: 2,
      message: 'New comment on your post',
      date: '2024-01-18 13:20',
      type: 'info',
      isRead: false,
    },
    {
      id: 3,
      message: 'Please update your password',
      date: '2024-01-17 11:30',
      type: 'warning',
      isRead: true,
    },
  ])

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

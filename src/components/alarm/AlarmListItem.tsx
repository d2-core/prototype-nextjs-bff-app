import React from 'react'
import { Box, Avatar, Typography, Chip, IconButton } from '@mui/material'
import { Circle, Notifications, AccessTime } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { Alarm } from '@/models/notice'

interface Props {
  alarm: Alarm
}

function AlarmListItem({ alarm }: Props) {
  const route = useRouter()

  const getNotificationIcon = (type?: string) => {
    switch (type) {
      case 'success':
        return <Circle sx={{ color: 'success.main' }} />
      case 'warning':
        return <Circle sx={{ color: 'warning.main' }} />
      default:
        return <Circle sx={{ color: 'info.main' }} />
    }
  }

  const handleMarkAsRead = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Box
      onClick={() => route.push(`/alarms/${alarm.id}`)}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2,
        p: 2,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'action.hover',
        },
        borderRadius: 1,
        position: 'relative',
      }}
    >
      {/* Avatar */}
      <Avatar
        sx={{
          bgcolor: 'background.paper',
          border: 1,
          borderColor: (theme) => {
            switch (alarm.type) {
              case 'success':
                return theme.palette.success.main
              case 'warning':
                return theme.palette.warning.main
              default:
                return theme.palette.info.main
            }
          },
        }}
      >
        {getNotificationIcon(alarm?.type)}
      </Avatar>

      {/* Content */}
      <Box sx={{ flex: 1, mr: !alarm.isRead ? 5 : 0 }}>
        {/* Title and New badge */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: !alarm.isRead ? 500 : 400,
              color: !alarm.isRead ? 'text.primary' : 'text.secondary',
            }}
          >
            {alarm.message}
          </Typography>
          {!alarm.isRead && (
            <Chip
              label="New"
              color="primary"
              size="small"
              sx={{ height: 20 }}
            />
          )}
        </Box>

        {/* Metadata */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTime sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {alarm.date}
            </Typography>
          </Box>
          <Chip
            label={alarm.type}
            size="small"
            color={
              alarm.type === 'success'
                ? 'success'
                : alarm.type === 'warning'
                  ? 'warning'
                  : 'info'
            }
            sx={{ height: 20 }}
          />
        </Box>
      </Box>

      {/* Read Button */}
      {!alarm.isRead && (
        <Box
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <IconButton onClick={handleMarkAsRead} size="small">
            <Notifications color="primary" />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}

export default AlarmListItem

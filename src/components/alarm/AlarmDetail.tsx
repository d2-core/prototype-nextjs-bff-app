import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Avatar,
} from '@mui/material'
import { Circle, ArrowBack, AccessTime } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import { Alarm } from '@/models/notice'

interface Props {
  alarmId: number
}

function AlarmDetail({ alarmId }: Props) {
  const router = useRouter()

  const notification: Alarm = {
    id: alarmId,
    message: 'Your request has been approved',
    date: '2024-01-18 15:45',
    type: 'success',
    isRead: false,
    detail:
      'Your vacation request for January 25-26 has been approved by your manager. You can check the details in the HR system.',
  }

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

  const getStatusColor = (type?: string) => {
    switch (type) {
      case 'success':
        return 'success'
      case 'warning':
        return 'warning'
      default:
        return 'info'
    }
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => router.back()}
        sx={{ mb: 3 }}
      >
        Back
      </Button>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: 'background.paper',
                border: 1,
                borderColor: `${notification.type}.main`,
              }}
            >
              {getNotificationIcon(notification?.type)}
            </Avatar>

            <Box sx={{ flex: 1 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}
              >
                <Typography variant="h6">{notification.message}</Typography>
                <Chip
                  label={notification.type}
                  color={getStatusColor(notification?.type)}
                  size="small"
                />
              </Box>

              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}
              >
                <AccessTime sx={{ fontSize: 16, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  {notification.date}
                </Typography>
              </Box>

              {notification.detail && (
                <Box
                  sx={{
                    bgcolor: 'grey.50',
                    p: 2,
                    borderRadius: 1,
                    whiteSpace: 'pre-line',
                  }}
                >
                  <Typography variant="body1">{notification.detail}</Typography>
                </Box>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}
export default AlarmDetail

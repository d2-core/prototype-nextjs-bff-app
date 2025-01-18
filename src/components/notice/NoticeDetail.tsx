import React from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Button,
  Divider,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Notice } from '@/models/notice'

interface Props {
  noticeId: number
}

function NoticeDetail({ noticeId }: Props) {
  const router = useRouter()

  const notice: Notice = {
    id: noticeId,
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
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
          sx={{ mb: 2 }}
        >
          Back to List
        </Button>
      </Box>

      <Card>
        <CardContent>
          <Grid container spacing={3}>
            {/* Header Section */}
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  mb: 2,
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Typography variant="h5" component="h1">
                      {notice.title}
                    </Typography>
                    {notice.isImportant && (
                      <Chip label="Important" color="error" size="small" />
                    )}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip label={notice.category} size="small" />
                    <Chip label={notice.date} size="small" variant="outlined" />
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" color="text.secondary">
                    Views: {notice.views}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Metadata Section */}
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: 'grey.50',
                  p: 2,
                  borderRadius: 1,
                  display: 'flex',
                  gap: 3,
                }}
              >
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Author
                  </Typography>
                  <Typography variant="body1">{notice.author}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Date
                  </Typography>
                  <Typography variant="body1">{notice.date}</Typography>
                </Box>
              </Box>
            </Grid>

            {/* Content Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Content
              </Typography>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: 'pre-line',
                      minHeight: '200px',
                    }}
                  >
                    {notice.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Attachments Section */}
            {notice.attachments && notice.attachments.length > 0 && (
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                  Attachments ({notice.attachments.length})
                </Typography>
                <Card variant="outlined">
                  <CardContent>
                    {notice.attachments.map((file, index) => (
                      <React.Fragment key={file.name}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            py: 1,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ color: 'primary.main', cursor: 'pointer' }}
                          >
                            {file.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {file.size}
                          </Typography>
                        </Box>
                        {index < notice.attachments!.length - 1 && (
                          <Divider sx={{ my: 1 }} />
                        )}
                      </React.Fragment>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            )}

            {/* Navigation Buttons */}
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  mt: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.back()}
                >
                  Back to List
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}

export default NoticeDetail

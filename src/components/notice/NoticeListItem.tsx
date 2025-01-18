import { Box, Chip, Typography } from '@mui/material'

import { useRouter } from 'next/router'
import { Notice } from '@/models/notice'

interface Props {
  notice: Notice
}

function NoticeListItem({ notice }: Props) {
  const route = useRouter()
  return (
    <Box>
      <Box
        onClick={() => route.push(`/notice/${notice.id}`)}
        sx={{ mb: 2, cursor: 'pointer' }}
      >
        <Box display={'flex'} alignItems={'center'} gap={1} mb={1}>
          <Typography variant="subtitle1">{notice.title}</Typography>
          {notice.isImportant && (
            <Chip
              label="Important"
              color="error"
              size="small"
              sx={{ flexShrink: 0 }}
            />
          )}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {notice.content}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
        }}
      >
        <Chip label={notice.category} size="small" />
        <Chip label={notice.date} size="small" variant="outlined" />
      </Box>
    </Box>
  )
}

export default NoticeListItem

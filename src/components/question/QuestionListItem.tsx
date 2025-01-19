import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Typography,
} from '@mui/material'
import {
  BookmarkBorder,
  CheckCircle,
  MoreVert,
  QuestionAnswer,
  ThumbUp,
} from '@mui/icons-material'
import { useRouter } from 'next/router'
import { Question } from '@/models/question'

interface Props {
  question: Question
}
function QuestionListItem({ question }: Props) {
  const route = useRouter()
  const handleItemClick = (questionId: number) => {
    route.push(`/questions/${questionId}`)
  }
  return (
    <Box
      onClick={() => handleItemClick(question.id)}
      key={question.id}
      sx={{
        cursor: 'pointer',
      }}
    >
      <Box display="flex" gap={2}>
        <Box display="flex" gap={2}>
          <Avatar src={question.userImage} sx={{ width: 40, height: 40 }} />
        </Box>

        <Box flex={1}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box>
              <Box display="flex" alignItems="center" gap={1} mb={0.5}>
                <Typography variant="subtitle1">{question.userName}</Typography>
                {question.isInstructor && (
                  <Chip
                    label="Instructor"
                    size="small"
                    color="primary"
                    sx={{ height: 20 }}
                  />
                )}
                <Typography variant="body2" color="text.secondary">
                  • {new Date(question.date).toLocaleDateString()}
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom>
                {question.title}
              </Typography>
            </Box>
            <IconButton size="small">
              <MoreVert />
            </IconButton>
          </Box>

          <Typography variant="body1" paragraph>
            {question.content}
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mb={2}>
            {question.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Box>

          <Box display="flex" alignItems="center" gap={3}>
            <Button size="small" startIcon={<ThumbUp />}>
              {question.likes}
            </Button>
            <Button size="small" startIcon={<QuestionAnswer />}>
              {question.answers} answers
            </Button>
            {question.isAnswered && (
              <Chip
                icon={<CheckCircle fontSize="small" />}
                label="Answered"
                size="small"
                color="success"
              />
            )}
            <IconButton size="small">
              <BookmarkBorder />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default QuestionListItem

import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  Divider,
  TextField,
  IconButton,
  Chip,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ListItemIcon,
} from '@mui/material'
import {
  ThumbUp,
  ThumbUpOutlined,
  BookmarkBorder,
  Bookmark,
  MoreVert,
  CheckCircle,
  Edit,
  Delete,
  Flag,
  ArrowBack,
} from '@mui/icons-material'
import { useState } from 'react'
import Link from 'next/link'

// 더미 질문 데이터
const QUESTION_DATA = {
  id: '1',
  title: 'How to implement custom hooks with TypeScript?',
  content: `I'm working on a React project with TypeScript and I'm trying to create a custom hook for form validation. I'm having some trouble with the TypeScript types.

Here's what I've tried so far:

\`\`\`typescript
function useFormValidation<T>(initialState: T) {
  // Implementation here
}
\`\`\`

Can someone explain how to properly type the return values and handle generic types in custom hooks?`,
  userName: 'Alex Kim',
  userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
  date: '2024-01-15',
  courseName: 'Advanced React Development',
  courseCategory: 'Programming',
  likes: 15,
  isLiked: false,
  isBookmarked: false,
  tags: ['react', 'typescript', 'hooks'],
  isAnswered: true,
  isInstructor: false,
  views: 234,
}

// 더미 답변 데이터
const ANSWERS_DATA = [
  {
    id: 'a1',
    userName: 'Sarah Johnson',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    content: `Here's an example of how you can implement a custom hook with TypeScript:

\`\`\`typescript
interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
}

function useFormValidation<T extends Record<string, any>>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Implementation details...

  return { values, errors, handleChange, handleSubmit };
}
\`\`\`

The key is to use generic types to maintain type safety throughout your form handling logic.`,
    date: '2024-01-15',
    likes: 8,
    isLiked: false,
    isInstructor: true,
    isAccepted: true,
  },
  {
    id: 'a2',
    userName: 'Mike Chen',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    content:
      'Another approach would be to use a validation schema library like Zod or Yup...',
    date: '2024-01-16',
    likes: 3,
    isLiked: false,
    isInstructor: false,
    isAccepted: false,
  },
]

interface Props {
  questionId: number
}

function QuestionDetail({ questionId }: Props) {
  const [question, setQuestion] = useState(QUESTION_DATA)
  const [answers, setAnswers] = useState(ANSWERS_DATA)
  const [newAnswer, setNewAnswer] = useState('')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const handleLikeQuestion = () => {
    setQuestion((prev) => ({
      ...prev,
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
      isLiked: !prev.isLiked,
    }))
  }

  const handleBookmarkQuestion = () => {
    setQuestion((prev) => ({
      ...prev,
      isBookmarked: !prev.isBookmarked,
    }))
  }

  const handleLikeAnswer = (answerId: string) => {
    setAnswers((prev) =>
      prev.map((answer) =>
        answer.id === answerId
          ? {
              ...answer,
              likes: answer.isLiked ? answer.likes - 1 : answer.likes + 1,
              isLiked: !answer.isLiked,
            }
          : answer,
      ),
    )
  }

  const handleAcceptAnswer = (answerId: string) => {
    setAnswers((prev) =>
      prev.map((answer) => ({
        ...answer,
        isAccepted: answer.id === answerId,
      })),
    )
  }

  const handleSubmitAnswer = () => {
    if (newAnswer.trim()) {
      const newAnswerObj = {
        id: `a${answers.length + 1}`,
        userName: 'Current User',
        userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=current',
        content: newAnswer,
        date: new Date().toISOString(),
        likes: 0,
        isLiked: false,
        isInstructor: false,
        isAccepted: false,
      }
      setAnswers((prev) => [...prev, newAnswerObj])
      setNewAnswer('')
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Link href="/questions">
        <Button startIcon={<ArrowBack />} sx={{ mb: 3 }}>
          Back to Questions
        </Button>
      </Link>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box flex={1}>
              <Typography variant="h4" gutterBottom>
                {question.title}
              </Typography>
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar src={question.userImage} />
                  <Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography variant="subtitle1">
                        {question.userName}
                      </Typography>
                      {question.isInstructor && (
                        <Chip
                          label="Instructor"
                          size="small"
                          color="primary"
                          sx={{ height: 20 }}
                        />
                      )}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(question.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  in {question.courseName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • {question.views} views
                </Typography>
              </Box>
            </Box>

            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <MoreVert />
            </IconButton>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, whiteSpace: 'pre-wrap' }}>
            {question.content}
          </Typography>

          <Box display="flex" gap={1} mb={3}>
            {question.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Button
              size="small"
              startIcon={question.isLiked ? <ThumbUp /> : <ThumbUpOutlined />}
              onClick={handleLikeQuestion}
            >
              {question.likes}
            </Button>
            <IconButton onClick={handleBookmarkQuestion}>
              {question.isBookmarked ? <Bookmark /> : <BookmarkBorder />}
            </IconButton>
          </Box>
        </CardContent>
      </Card>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          {answers.length} Answers
        </Typography>
        {answers.map((answer) => (
          <Card key={answer.id} sx={{ mb: 2 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Avatar src={answer.userImage} />
                <Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="subtitle1">
                      {answer.userName}
                    </Typography>
                    {answer.isInstructor && (
                      <Chip
                        label="Instructor"
                        size="small"
                        color="primary"
                        sx={{ height: 20 }}
                      />
                    )}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(answer.date).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{ mb: 2, whiteSpace: 'pre-wrap' }}
              >
                {answer.content}
              </Typography>

              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  size="small"
                  startIcon={answer.isLiked ? <ThumbUp /> : <ThumbUpOutlined />}
                  onClick={() => handleLikeAnswer(answer.id)}
                >
                  {answer.likes}
                </Button>
                {question.isAnswered && (
                  <Button
                    size="small"
                    startIcon={<CheckCircle />}
                    color={answer.isAccepted ? 'success' : 'inherit'}
                    onClick={() => handleAcceptAnswer(answer.id)}
                  >
                    {answer.isAccepted ? 'Accepted' : 'Accept'}
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Your Answer
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Write your answer here..."
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleSubmitAnswer}
            disabled={!newAnswer.trim()}
          >
            Post Answer
          </Button>
        </CardContent>
      </Card>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem
          onClick={() => {
            setAnchorEl(null)
          }}
        >
          <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          Edit Question
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null)
            setShowDeleteDialog(true)
          }}
        >
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          Delete Question
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null)
          }}
        >
          <ListItemIcon>
            <Flag fontSize="small" />
          </ListItemIcon>
          Report Question
        </MenuItem>
      </Menu>

      <Dialog
        open={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
      >
        <DialogTitle>Delete Question</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this question? This action cannot be
          undone.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteDialog(false)}>Cancel</Button>
          <Button
            color="error"
            onClick={() => {
              setShowDeleteDialog(false)
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default QuestionDetail

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Autocomplete,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Divider,
  Tab,
  Tabs,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Alert,
  Grid,
} from '@mui/material'
import { ArrowBack, Preview, Edit, Save } from '@mui/icons-material'
import { useState } from 'react'
import Link from 'next/link'

const COURSES = [
  { id: 1, title: 'Advanced React Development', category: 'Programming' },
  { id: 2, title: 'Modern Web Design', category: 'Design' },
  { id: 3, title: 'Digital Marketing Fundamentals', category: 'Marketing' },
]

const AVAILABLE_TAGS = [
  'react',
  'typescript',
  'javascript',
  'css',
  'html',
  'nextjs',
  'hooks',
  'redux',
  'styling',
  'testing',
  'performance',
  'optimization',
  'debugging',
  'state-management',
  'api',
  'authentication',
]

interface QuestionForm {
  title: string
  content: string
  courseId: number | null
  tags: string[]
}

interface Props {
  questionId?: number
}

function QuestionForm({ questionId }: Props) {
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit')
  const [showExitDialog, setShowExitDialog] = useState(false)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)

  const [formData, setFormData] = useState<QuestionForm>({
    title: '',
    content: '',
    courseId: null,
    tags: [],
  })

  const [errors, setErrors] = useState({
    title: '',
    content: '',
    courseId: '',
    tags: '',
  })

  const validateForm = () => {
    const newErrors = {
      title: '',
      content: '',
      courseId: '',
      tags: '',
    }

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    } else if (formData.title.length < 15) {
      newErrors.title = 'Title must be at least 15 characters long'
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Content is required'
    } else if (formData.content.length < 30) {
      newErrors.content = 'Content must be at least 30 characters long'
    }

    if (!formData.courseId) {
      newErrors.courseId = 'Please select a course'
    }

    if (formData.tags.length === 0) {
      newErrors.tags = 'At least one tag is required'
    } else if (formData.tags.length > 5) {
      newErrors.tags = 'Maximum 5 tags allowed'
    }

    setErrors(newErrors)
    return Object.values(newErrors).every((error) => !error)
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Submitting:', formData)
      setShowSuccessAlert(true)
    }
  }

  const handleExitConfirm = () => {
    setShowExitDialog(false)
  }

  const selectedCourse = COURSES.find(
    (course) => course.id === formData.courseId,
  )

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Link href="/questions">
            <Button startIcon={<ArrowBack />}>Back to Questions</Button>
          </Link>
          <Typography variant="h4" mt={2}>
            Ask a Question
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => setShowExitDialog(true)}
            sx={{ mr: 2 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            startIcon={<Save />}
          >
            Post Question
          </Button>
        </Box>
      </Box>
      {showSuccessAlert && (
        <Alert
          severity="success"
          onClose={() => setShowSuccessAlert(false)}
          sx={{ mb: 3 }}
        >
          Your question has been posted successfully!
        </Alert>
      )}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <FormControl fullWidth error={!!errors.courseId} sx={{ mb: 3 }}>
                <InputLabel>Select Course</InputLabel>
                <Select
                  value={formData.courseId || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      courseId: e.target.value as number,
                    })
                  }
                  label="Select Course"
                >
                  {COURSES.map((course) => (
                    <MenuItem key={course.id} value={course.id}>
                      {course.title}
                    </MenuItem>
                  ))}
                </Select>
                {errors.courseId && (
                  <FormHelperText>{errors.courseId}</FormHelperText>
                )}
              </FormControl>
              <TextField
                fullWidth
                label="Question Title"
                placeholder="What's your question? Be specific."
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
                error={!!errors.title}
                helperText={
                  errors.title || 'Tip: Start with what, how, why, etc.'
                }
                sx={{ mb: 3 }}
              />
              <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                <Tabs
                  value={activeTab}
                  onChange={(_, newValue) => setActiveTab(newValue)}
                >
                  <Tab icon={<Edit />} label="Edit" value="edit" />
                  <Tab icon={<Preview />} label="Preview" value="preview" />
                </Tabs>
              </Box>
              {activeTab === 'edit' ? (
                <TextField
                  fullWidth
                  multiline
                  rows={12}
                  placeholder="Describe your question in detail..."
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      content: e.target.value,
                    })
                  }
                  error={!!errors.content}
                  helperText={errors.content}
                />
              ) : (
                <Box sx={{ p: 2, minHeight: '300px', bgcolor: 'grey.50' }}>
                  <Typography whiteSpace="pre-wrap">
                    {formData.content || 'Nothing to preview'}
                  </Typography>
                </Box>
              )}
              <Box mt={3}>
                <Autocomplete
                  multiple
                  options={AVAILABLE_TAGS}
                  value={formData.tags}
                  onChange={(_, newValue) =>
                    setFormData({
                      ...formData,
                      tags: newValue,
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Tags"
                      error={!!errors.tags}
                      helperText={errors.tags || 'Add up to 5 tags'}
                    />
                  )}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        label={option}
                        {...getTagProps({ index })}
                        key={option}
                      />
                    ))
                  }
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Tips for asking
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                The community is here to help you with specific problems.
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle2" gutterBottom>
                1. Summarize the problem
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Include details about your goal and what you've tried.
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                2. Describe what you've tried
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Show what you've tried and tell us what you found.
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                3. Show some code
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Use code blocks (\`\`\`) to format your code properly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog open={showExitDialog} onClose={() => setShowExitDialog(false)}>
        <DialogTitle>Leave page?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have unsaved changes. Are you sure you want to leave this page?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowExitDialog(false)}>Stay</Button>
          <Button onClick={handleExitConfirm} color="error">
            Leave
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default QuestionForm

import { Box, Container, Grid, Card, CardContent, Divider } from '@mui/material'
import { useState } from 'react'
import { useRouter } from 'next/router'
import EmptyCard from '../shared/EmptyCard'
import QuestionListItem from './QuestionListItem'
import QuestionFilter from './QuestionFilter'
import { Question as IQuestion } from '@models/question'

const DUMMY_QUESTIONS: IQuestion[] = [
  {
    id: 1,
    userName: 'Alex Kim',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    date: '2024-01-15',
    title: 'How to implement custom hooks with TypeScript?',
    content:
      "I'm trying to create a custom hook for form validation but having trouble with TypeScript types. Can someone explain how to properly type the return values?",
    courseName: 'Advanced React Development',
    courseCategory: 'Programming',
    likes: 15,
    answers: 3,
    isAnswered: true,
    isInstructor: false,
    tags: ['react', 'typescript', 'hooks'],
  },
  {
    id: 2,
    userName: 'Sarah Johnson',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    date: '2024-01-14',
    title: 'Best practices for responsive design in 2024',
    content:
      'What are the current best practices for responsive web design? Are CSS Grid and Flexbox still the way to go?',
    courseName: 'Modern Web Design',
    courseCategory: 'Design',
    likes: 8,
    answers: 2,
    isAnswered: false,
    isInstructor: true,
    tags: ['css', 'responsive-design', 'web-design'],
  },
  {
    id: 3,
    userName: 'Mike Chen',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    date: '2024-01-13',
    title: 'SEO optimization techniques for React applications',
    content:
      'Looking for modern SEO techniques specifically for React-based applications. What are the best practices in 2024?',
    courseName: 'Digital Marketing',
    courseCategory: 'Marketing',
    likes: 12,
    answers: 4,
    isAnswered: true,
    isInstructor: false,
    tags: ['seo', 'react', 'marketing'],
  },
]

const CATEGORIES = ['Programming', 'Design', 'Business', 'Marketing']

const TAGS = [
  'react',
  'typescript',
  'javascript',
  'css',
  'html',
  'seo',
  'marketing',
  'design',
]

function Question() {
  const route = useRouter()
  const [sortBy, setSortBy] = useState('recent')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showAnswered, setShowAnswered] = useState<string>('all')

  const filteredQuestions = DUMMY_QUESTIONS.filter((question) => {
    const matchesSearch =
      question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.content.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(question.courseCategory)

    const matchesTags =
      selectedTags.length === 0 ||
      question.tags.some((tag) => selectedTags.includes(tag))

    const matchesAnswered =
      showAnswered === 'all' ||
      (showAnswered === 'answered' && question.isAnswered) ||
      (showAnswered === 'unanswered' && !question.isAnswered)

    return matchesSearch && matchesCategory && matchesTags && matchesAnswered
  })

  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'likes':
        return b.likes - a.likes
      case 'answers':
        return b.answers - a.answers
      default:
        return 0
    }
  })

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <QuestionFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            showAnswered={'all'}
            onAnsweredStatusChange={setShowAnswered}
            categories={[]}
            selectedCategories={selectedCategories}
            onCategoryChange={setSelectedCategories}
            tags={[]}
            selectedTags={selectedTags}
            onTagChange={setSelectedTags}
            onClearFilters={() => {
              setSearchTerm('')
              setShowAnswered('all')
              setSelectedCategories([])
              setSelectedTags([])
            }}
          />
        </Grid>

        <Grid item xs={12} md={9}>
          <Card>
            <CardContent>
              {sortedQuestions.length > 0 ? (
                sortedQuestions.map((question, index) => (
                  <Box>
                    <QuestionListItem question={question} />
                    {index !== sortedQuestions.length - 1 ? (
                      <Divider sx={{ my: 3 }} />
                    ) : null}
                  </Box>
                ))
              ) : (
                <EmptyCard title={'No questions match your filters.'} />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Question

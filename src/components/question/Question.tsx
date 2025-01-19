import { Box, Container, Grid, Card, CardContent, Divider } from '@mui/material'
import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import EmptyCard from '../shared/EmptyCard'
import QuestionListItem from './QuestionListItem'
import QuestionFilter from './QuestionFilter'
import { Question as IQuestion } from '@/models/question'
import ListDirection from '../shared/ListDirection'

interface Props {
  questions: IQuestion[]
  title?: ReactNode
}
function Question({ questions, title }: Props) {
  const route = useRouter()
  const [sortBy, setSortBy] = useState('recent')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showAnswered, setShowAnswered] = useState<string>('all')

  const filteredQuestions = questions.filter((question) => {
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
          {title && <ListDirection title={title} length={questions.length} />}
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

import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
} from '@mui/material'
import { QuestionAnswer, RateReview, School } from '@mui/icons-material'
import React from 'react'
interface UserStats {
  questionsCount: number
  reviewsCount: number
  coursesCount: number
}
function Student() {
  const userStats: UserStats = {
    questionsCount: 15,
    reviewsCount: 8,
    coursesCount: 3,
  }

  const cards = [
    {
      title: '내 질문',
      icon: <QuestionAnswer sx={{ fontSize: 40 }} />,
      count: userStats.questionsCount,
      description: '내가 작성한 질문들을 확인하세요',
      link: '/my/question',
      color: '#E0B0FF',
    },
    {
      title: '작성한 리뷰',
      icon: <RateReview sx={{ fontSize: 40 }} />,
      count: userStats.reviewsCount,
      description: '내가 작성한 강의 리뷰를 확인하세요',
      link: '/my/review',
      color: '#4caf50',
    },
    {
      title: '나의 강의실',
      icon: <School sx={{ fontSize: 40 }} />,
      count: userStats.coursesCount,
      description: '수강 중인 강의를 이어서 학습하세요',
      link: '/my/course',
      color: '#f44336',
    },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        나의 활동
      </Typography>

      <Grid container spacing={4}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  {React.cloneElement(card.icon, {
                    sx: {
                      ...card.icon.props.sx,
                      color: card.color,
                    },
                  })}
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  color="primary"
                  sx={{ my: 2 }}
                >
                  {card.count}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button
                  variant="contained"
                  href={card.link}
                  sx={{
                    bgcolor: card.color,
                    '&:hover': {
                      bgcolor: card.color,
                      opacity: 0.9,
                    },
                  }}
                >
                  바로가기
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Student

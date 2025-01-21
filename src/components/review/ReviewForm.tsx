import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Rating,
  Grid,
  FormControl,
  FormLabel,
  Divider,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material'
import { ArrowBack, Save } from '@mui/icons-material'
import Link from 'next/link'
import { useAlertContext } from '@/contexts/AlertContext'
import { courses, reviewRatingCategorys } from '@/utils/dummy'
import { useForm, Controller } from 'react-hook-form'
import { ReviewForm as IReviewForm } from '@models/form'

interface Props {
  courseId?: string
}

const defaultValues: IReviewForm = {
  courseId: 0,
  detailRatings: reviewRatingCategorys.map((category) => ({
    id: category.id,
    rating: 0,
  })),
  title: '',
  description: '',
}

function ReviewForm({ courseId }: Props) {
  const { open } = useAlertContext()

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    register,
  } = useForm<IReviewForm>({
    mode: 'onChange',
    defaultValues,
  })

  const detailRatings = watch('detailRatings')
  const validRatings = detailRatings.filter((rating) => rating.rating > 0)
  const overallRating =
    validRatings.length > 0
      ? validRatings.reduce((acc, curr) => acc + curr.rating, 0) /
        validRatings.length
      : 0

  const onSubmit = async (data: IReviewForm) => {
    try {
      open({
        title: '알림',
        description: '리뷰가 성공적으로 등록되었습니다.',
        onPrimaryButtonClick: () => {},
      })
    } catch (error) {
      open({
        title: '알림',
        description: '리뷰 등록에 실패했습니다.',
        onPrimaryButtonClick: () => {},
      })
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Box>
            <Link href="/courses/some-course">
              <Button startIcon={<ArrowBack />}>강의로 돌아가기</Button>
            </Link>
            <Typography variant="h4" mt={2}>
              수강 후기 작성
            </Typography>
          </Box>
          <Box>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => {}}
              sx={{ mr: 2 }}
            >
              취소
            </Button>
            <Button type="submit" variant="contained" startIcon={<Save />}>
              리뷰 등록
            </Button>
          </Box>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Controller
                  name="courseId"
                  control={control}
                  rules={{
                    required: '강의를 선택해주세요',
                    validate: (value) => value !== 0 || '강의를 선택해주세요',
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <FormControl
                      fullWidth
                      sx={{ mt: 2, mb: 2 }}
                      error={!!error}
                    >
                      <InputLabel>리뷰를 작성할 강의 선택</InputLabel>
                      <Select {...field} label="리뷰를 작성할 강의 선택">
                        {courses.map((course) => (
                          <MenuItem key={course.id} value={course.id}>
                            <Box>
                              <Typography variant="subtitle1">
                                {course.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {course.teacherName} • 수강 진도율:{' '}
                                {course.progress}%
                              </Typography>
                            </Box>
                          </MenuItem>
                        ))}
                      </Select>
                      {error && (
                        <FormHelperText>{error.message}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                />
                <FormControl sx={{ width: '100%' }}>
                  <FormLabel component="legend">
                    <Typography variant="h6" gutterBottom>
                      전체 평점 (상세 평점의 평균)
                    </Typography>
                  </FormLabel>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Rating
                      value={overallRating}
                      size="large"
                      precision={0.1}
                      readOnly
                    />
                    <Typography variant="h5" color="primary">
                      {overallRating.toFixed(1)}
                    </Typography>
                  </Box>
                </FormControl>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" gutterBottom>
                  상세 평점
                </Typography>
                <Grid container spacing={3} sx={{ mb: 4 }}>
                  {reviewRatingCategorys.map((category, index) => (
                    <Grid item xs={12} sm={6} key={category.id}>
                      <FormControl sx={{ width: '100%' }}>
                        <FormLabel>
                          <Typography variant="subtitle1">
                            {category.label}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                          >
                            {category.description}
                          </Typography>
                        </FormLabel>
                        <Controller
                          name={`detailRatings.${index}.rating`}
                          control={control}
                          rules={{
                            required: '평점을 입력해주세요',
                            validate: (value) =>
                              value !== 0 || '평점을 입력해주세요',
                          }}
                          render={({
                            fieldState: { error },
                            field: { value, onChange },
                          }) => (
                            <Box>
                              <Box display="flex" alignItems="center" gap={2}>
                                <Rating
                                  value={value}
                                  onChange={(_, newValue) => {
                                    onChange(newValue || 0)
                                  }}
                                  size="medium"
                                  precision={0.5}
                                />
                                <Typography>{value}</Typography>
                              </Box>
                              {error && (
                                <FormHelperText sx={{ color: '#d32f2f' }}>
                                  {error.message}
                                </FormHelperText>
                              )}
                            </Box>
                          )}
                        />
                      </FormControl>
                    </Grid>
                  ))}
                </Grid>

                <Divider sx={{ my: 3 }} />

                <TextField
                  fullWidth
                  label="후기 제목"
                  placeholder="수강 경험을 요약해주세요"
                  error={!!errors.title}
                  helperText={errors.title?.message}
                  sx={{ mb: 3 }}
                  {...register('title', {
                    required: '제목을 입력해주세요',
                    maxLength: {
                      value: 100,
                      message: '제목은 100자 이내로 입력해주세요',
                    },
                  })}
                />

                <TextField
                  fullWidth
                  multiline
                  rows={8}
                  label="후기 내용"
                  placeholder="좋았던 점이나 아쉬웠던 점은 무엇인가요? 주요 학습 내용은 무엇이었나요? 학습에 가장 도움이 되었던 것은 무엇인가요?"
                  error={!!errors.description}
                  helperText={
                    errors.description?.message ||
                    `${watch('description').length}/1000자`
                  }
                  {...register('description', {
                    required: '내용을 입력해주세요',
                    maxLength: {
                      value: 1000,
                      message: '내용은 1000자 이내로 입력해주세요',
                    },
                  })}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <TipCard />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

function TipCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          좋은 후기 작성을 위한 팁
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="subtitle2" gutterBottom>
          구체적으로 작성해주세요
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          여러분의 후기는 다른 수강생들의 선택에 도움이 됩니다. 좋았던 점,
          아쉬웠던 점, 배운 점을 설명해주세요.
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          솔직하게 작성해주세요
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          강의 개선에 도움이 되는 솔직한 피드백을 환영합니다. 개인적인 비방이나
          무례한 댓글은 삼가해주세요.
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          건설적으로 작성해주세요
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          향후 수강생들에게 도움이 되거나 강의 개선에 도움이 될 수 있는
          인사이트를 공유해주세요.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ReviewForm

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
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Tooltip,
} from '@mui/material'
import {
  ArrowBack,
  Save,
  LockOutlined,
  PublicOutlined,
} from '@mui/icons-material'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'
import { QuestionForm as IQuestionForm } from '@/models/form'
import { courses, lectures, questionAvaliavleTags } from '@/utils/dummy'
import { useAlertContext } from '@/contexts/AlertContext'
import { useEffect } from 'react'

interface Props {
  courseId?: number
}

const defaultValues: IQuestionForm = {
  teacherId: 0,
  courseId: 0,
  lectureId: -1,
  type: 'course',
  title: '',
  content: '',
  tags: [],
  isPrivate: false,
}

function QuestionForm({ courseId }: Props) {
  const { open } = useAlertContext()
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    register,
    reset,
  } = useForm<IQuestionForm>({
    mode: 'onChange',
    defaultValues: {
      ...defaultValues,
      courseId: courseId || 0,
    },
  })

  const questionType = watch('type')
  const isPrivate = watch('isPrivate')

  const onSubmit = async (data: IQuestionForm) => {
    console.log(data)
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

  useEffect(() => {
    reset({
      ...defaultValues,
      type: watch('type'),
      isPrivate: watch('isPrivate'),
    })
  }, [watch('type')])

  console.log(watch())

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
            <Button startIcon={<ArrowBack />}>질문 목록으로</Button>
          </Link>
          <Typography variant="h4" mt={2}>
            질문하기
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="inherit"
            component={Link}
            href="/questions"
            sx={{ mr: 2 }}
          >
            취소
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            startIcon={<Save />}
          >
            질문 등록
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >
                <FormControl component="fieldset">
                  <Typography variant="subtitle1" gutterBottom>
                    질문 유형
                  </Typography>
                  <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup row {...field}>
                        <FormControlLabel
                          value="course"
                          control={<Radio />}
                          label="특정 강의 관련 질문"
                        />
                        <FormControlLabel
                          value="general"
                          control={<Radio />}
                          label="일반 질문"
                        />
                      </RadioGroup>
                    )}
                  />
                </FormControl>
                <Controller
                  name="isPrivate"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Box display="flex" alignItems="center">
                      <Tooltip title={value ? '비공개 질문' : '공개 질문'}>
                        <Box display="flex" alignItems="center">
                          {value ? (
                            <LockOutlined color="action" />
                          ) : (
                            <PublicOutlined color="action" />
                          )}
                          <Switch
                            checked={value}
                            onChange={onChange}
                            color="primary"
                          />
                          <Typography variant="body2" color="text.secondary">
                            {value ? '비공개' : '공개'}
                          </Typography>
                        </Box>
                      </Tooltip>
                    </Box>
                  )}
                />
              </Box>

              {questionType === 'course' && (
                <Box>
                  <Controller
                    name="courseId"
                    control={control}
                    rules={{
                      required: '강의를 선택해주세요',
                      validate: (value) => value !== 0 || '강의를 선택해주세요',
                    }}
                    render={({ field }) => (
                      <FormControl
                        fullWidth
                        error={!!errors.courseId}
                        sx={{ mb: 3 }}
                      >
                        <InputLabel>강의 선택</InputLabel>
                        <Select {...field} label="강의 선택">
                          {courses.map((course) => (
                            <MenuItem key={course.id} value={course.id}>
                              <Box>
                                <Typography variant="subtitle2">
                                  {course.title}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  {course.category}
                                </Typography>
                              </Box>
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.courseId && (
                          <FormHelperText>
                            {errors.courseId.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    )}
                  />
                  <Controller
                    name="lectureId"
                    control={control}
                    rules={{
                      required: '강좌를 선택해주세요',
                      validate: (value) =>
                        value !== -1 || '강좌를 선택해주세요',
                    }}
                    render={({ field }) => (
                      <FormControl
                        fullWidth
                        error={!!errors.lectureId}
                        sx={{ mb: 3 }}
                      >
                        <InputLabel>강좌 선택</InputLabel>
                        <Select
                          {...field}
                          label="강좌 선택"
                          renderValue={(selected) => {
                            if (selected === 0) {
                              return '선택안함'
                            }

                            const selectedLecture = lectures.find(
                              (lecture) => lecture.id === selected,
                            )
                            return selectedLecture ? selectedLecture.title : ''
                          }}
                        >
                          <MenuItem value={0}>
                            <Typography variant="subtitle2">
                              선택안함
                            </Typography>
                          </MenuItem>
                          {lectures.map((lecture) => (
                            <MenuItem key={lecture.id} value={lecture.id}>
                              <Typography variant="subtitle2">
                                {lecture.title}
                              </Typography>
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.lectureId && (
                          <FormHelperText>
                            {errors.lectureId.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    )}
                  />
                </Box>
              )}

              <TextField
                fullWidth
                label="질문 제목"
                placeholder="구체적인 질문을 입력해주세요"
                error={!!errors.title}
                helperText={
                  errors.title?.message ||
                  '팁: 무엇을, 어떻게, 왜 등으로 시작하면 좋습니다'
                }
                sx={{ mb: 3 }}
                {...register('title', {
                  required: '제목을 입력해주세요',
                  minLength: {
                    value: 5,
                    message: '제목은 최소 5자 이상이어야 합니다',
                  },
                })}
              />

              <TextField
                fullWidth
                multiline
                rows={12}
                placeholder={`질문을 자세히 설명해주세요...${isPrivate ? '\n\n※ 비공개 질문은 강사님과 운영자만 확인할 수 있습니다.' : ''}`}
                error={!!errors.content}
                helperText={errors.content?.message}
                {...register('content', {
                  required: '내용을 입력해주세요',
                  minLength: {
                    value: 10,
                    message: '내용은 최소 10자 이상이어야 합니다',
                  },
                })}
              />

              <Box mt={3}>
                <Controller
                  name="tags"
                  control={control}
                  rules={{
                    required: '최소 1개의 태그를 선택해주세요',
                    validate: (value) =>
                      value.length <= 5 || '최대 5개의 태그만 선택 가능합니다',
                  }}
                  render={({ field }) => (
                    <Autocomplete
                      {...field}
                      multiple
                      options={questionAvaliavleTags}
                      value={field.value}
                      onChange={(_, newValue) => field.onChange(newValue)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="태그"
                          error={!!errors.tags}
                          helperText={
                            errors.tags?.message ||
                            '최대 5개의 태그를 선택할 수 있습니다'
                          }
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
                  )}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <TipCard />
        </Grid>
      </Grid>
    </Container>
  )
}

function TipCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          질문 작성 팁
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          커뮤니티가 여러분의 질문을 더 잘 이해하고 도움을 드릴 수 있도록 아래
          팁을 참고해주세요.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
          <Typography variant="subtitle2" color="primary" gutterBottom>
            <LockOutlined
              sx={{ fontSize: 'small', mr: 1, verticalAlign: 'middle' }}
            />
            비공개 질문 안내
          </Typography>
          <Typography variant="body2" color="text.secondary">
            비공개로 설정된 질문은 강사님과 운영자만 확인할 수 있습니다.
            개인정보나 민감한 내용이 포함된 경우 비공개로 작성해주세요.
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle2" gutterBottom>
          1. 문제를 명확히 설명하기
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          목표와 시도한 방법을 자세히 설명해주세요.
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          2. 시도한 내용 공유하기
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          어떤 방법을 시도했고, 어떤 결과가 나왔는지 알려주세요.
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          3. 코드 예시 포함하기
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          코드 블록 (```)을 사용하여 코드를 보기 좋게 포맷팅해주세요.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default QuestionForm

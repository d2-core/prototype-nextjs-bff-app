import { Api } from '@/models/api'
import { QuestionForm, ReviewForm } from '@/models/form'
import { AxiosResponse } from 'axios'
import { getApi } from './axios'
import { Question } from '@/models/question'
import { Review } from '@/models/review'

export async function registerCourseQuestion({
  courseId,
  form,
}: {
  courseId: number
  form: QuestionForm
}): Promise<Api<Question>> {
  const response: AxiosResponse<Api<Question>> = await getApi('PRODUCT').post(
    `/api/product/v1/courses/${courseId}/questions`,
    {
      ...form,
    },
  )
  return response.data
}

export async function registerCourseReview({
  courseId,
  form,
}: {
  courseId: number
  form: ReviewForm
}): Promise<Api<Question>> {
  const response: AxiosResponse<Api<Question>> = await getApi('PRODUCT').post(
    `/api/product/v1/courses/${courseId}/reviews`,
    {
      ...form,
    },
  )
  return response.data
}

export async function getTeacherQuestionList({
  courseId,
}: {
  courseId: number
}): Promise<Api<Question>> {
  const response: AxiosResponse<Api<Question>> = await getApi('PRODUCT').get(
    `/api/product/v1/courses/${courseId}/questions`,
  )

  return response.data
}

export async function getCourseReviewList({
  courseId,
}: {
  courseId: number
}): Promise<Api<Review>> {
  const response: AxiosResponse<Api<Review>> = await getApi('PRODUCT').post(
    `/api/product/v1/courses/${courseId}/reviews`,
  )
  return response.data
}

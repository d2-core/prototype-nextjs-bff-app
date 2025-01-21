import { Api } from '@/models/api'
import { Teacher } from '@/models/teacher'
import { AxiosResponse } from 'axios'
import { getApi } from './axios'
import { TeacherFilter } from '@/models/filter'
import { createQueryParams } from '@/utils/query'
import { QuestionForm } from '@/models/form'
import { Question } from '@/models/question'

export async function getTeacherList(
  filter: TeacherFilter,
): Promise<Api<Teacher>> {
  const response: AxiosResponse<Api<Teacher>> = await getApi('PRODUCT').post(
    `/api/product/v1/teacher?${createQueryParams(filter)}`,
  )
  return response.data
}

export async function registerTeacherQuestion({
  teacherId,
  form,
}: {
  teacherId: number
  form: QuestionForm
}): Promise<Api<Question>> {
  const response: AxiosResponse<Api<Question>> = await getApi('PRODUCT').post(
    `/api/product/v1/teachers/${teacherId}/questions`,
    {
      ...form,
    },
  )

  return response.data
}

export async function getTeacherQuestionList({
  teacherId,
}: {
  teacherId: number
}): Promise<Api<Question>> {
  const response: AxiosResponse<Api<Question>> = await getApi('PRODUCT').get(
    `/api/product/v1/teachers/${teacherId}/questions`,
  )

  return response.data
}

import { Api } from '@/models/api'
import { Teacher, TeacherCourse } from '@/models/teacher'
import { AxiosResponse } from 'axios'
import { getApi } from './axios'
import { QuestionForm } from '@/models/form'
import { Question } from '@/models/question'

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

export async function getTeacherList(): Promise<Api<Teacher[]>> {
  const response: AxiosResponse<Api<Teacher[]>> = await getApi('PRODUCT').get(
    `/api/product/v1/teachers`,
  )
  return response.data
}

export async function getTeacherCourseList(): Promise<Api<TeacherCourse[]>> {
  const response: AxiosResponse<Api<TeacherCourse[]>> = await getApi(
    'PRODUCT',
  ).get(`/api/product/v1/teachers/courses`)
  return response.data
}

export async function getTeacherCourseListByTeacherId({
  teacherId,
}: {
  teacherId: number
}): Promise<Api<TeacherCourse[]>> {
  const response: AxiosResponse<Api<TeacherCourse[]>> = await getApi(
    'PRODUCT',
  ).get(`/api/product/v1/teacher/${teacherId}/courses`)
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

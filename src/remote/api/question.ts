import { Api } from '@/models/api'
import { Question } from '@/models/question'
import { AxiosResponse } from 'axios'
import { getApi } from './axios'

export async function deleteQuestion({
  questionId,
}: {
  questionId: number
}): Promise<Api<any>> {
  const response: AxiosResponse<Api<Question>> = await getApi('PRODUCT').delete(
    `/api/product/v1/questions/${questionId}`,
  )

  return response.data
}

export async function bookmarkQuestion({
  questionId,
}: {
  questionId: number
}): Promise<Api<any>> {
  const response: AxiosResponse<Api<Question>> = await getApi('PRODUCT').post(
    `/api/product/v1/questions/${questionId}/bookmark`,
  )

  return response.data
}

export async function acceptAnswer({
  questionId,
}: {
  questionId: number
}): Promise<Api<any>> {
  const response: AxiosResponse<Api<Question>> = await getApi('PRODUCT').post(
    `/api/product/v1/questions/${questionId}/accept-answer`,
  )

  return response.data
}

export async function answerToQuestion({
  questionId,
}: {
  questionId: number
}): Promise<Api<any>> {
  const response: AxiosResponse<Api<Question>> = await getApi('PRODUCT').post(
    `/api/product/v1/questions/${questionId}/answers`,
  )

  return response.data
}

export async function getMeQuestionList(): Promise<Api<Question>> {
  const response: AxiosResponse<Api<Question>> = await getApi('PRODUCT').get(
    `/api/product/v1/questions/me`,
  )

  return response.data
}

export async function getQuestion({
  questionId,
}: {
  questionId: number
}): Promise<Api<any>> {
  const response: AxiosResponse<Api<Question>> = await getApi('PRODUCT').get(
    `/api/product/v1/questions/${questionId}`,
  )

  return response.data
}

export async function getQuestionAnswerList({
  questionId,
}: {
  questionId: number
}): Promise<Api<any>> {
  const response: AxiosResponse<Api<Question>> = await getApi('PRODUCT').get(
    `/api/product/v1/questions/${questionId}/answers`,
  )

  return response.data
}

import { Api } from '@/models/api'
import { AxiosResponse } from 'axios'
import { getApi } from './axios'

export async function registerCouresStudent({
  courseId,
}: {
  courseId: number
}): Promise<Api<any>> {
  const response: AxiosResponse<Api<any>> = await getApi('PRODUCT').post(
    `/api/product/v1/courses/${courseId}/students`,
  )
  return response.data
}

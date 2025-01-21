import { Api } from '@/models/api'
import { Review } from '@/models/review'
import { AxiosResponse } from 'axios'
import { getApi } from './axios'

export async function deleteReview({
  reviewId,
}: {
  reviewId: number
}): Promise<Api<Review>> {
  const response: AxiosResponse<Api<Review>> = await getApi('PRODUCT').delete(
    `/api/product/v1/reviews/${reviewId}`,
  )
  return response.data
}

export async function helpfulReview({
  reviewId,
}: {
  reviewId: number
}): Promise<Api<Review>> {
  const response: AxiosResponse<Api<Review>> = await getApi('PRODUCT').post(
    `/api/product/v1/reviews/${reviewId}/helpful`,
  )
  return response.data
}

export async function getMeReviewList(): Promise<Api<Review>> {
  const response: AxiosResponse<Api<Review>> = await getApi('PRODUCT').post(
    `/api/product/v1/reviews/me`,
  )
  return response.data
}

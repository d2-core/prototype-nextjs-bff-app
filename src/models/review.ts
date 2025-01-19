export interface Review {
  id: number
  userId: number
  userName: string
  userImage: string
  rating: number
  date: string
  comment: string
  helpful: number
  courseName: string
  courseCategory: string
  verified: boolean
}

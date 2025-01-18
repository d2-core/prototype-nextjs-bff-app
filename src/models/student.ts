export interface StudentCourseReview {
  studentId: number
  rating?: number
  studentImageUrl?: string
  nickname?: string
  review?: string
}

export interface Question {
  id: string
  title: string
  content: string
  createdAt: string
}

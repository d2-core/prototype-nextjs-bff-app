export interface QuestionForm {
  teacherId: number
  courseId: number
  lectureId: number
  type: 'course' | 'general'
  title: string
  content: string
  tags: string[]
  isPrivate: boolean
}

export interface ReviewForm {
  courseId: number
  detailRatings: {
    id: number
    rating: number
  }[]
  title: string
  description: string
}

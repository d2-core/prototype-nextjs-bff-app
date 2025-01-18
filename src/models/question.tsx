export interface Question {
  id: number
  userName: string
  userImage: string
  date: string
  title: string
  content: string
  courseName: string
  courseCategory: string
  likes: number
  answers: number
  isAnswered: boolean
  isInstructor: boolean
  tags: string[]
}

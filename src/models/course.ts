export interface Course {
  id: string
  title: string
  thumbnail: string
  teacherName: string
  teacherImage: string
  teacherId: string
  level: 'beginner' | 'intermediate' | 'advanced'
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  isNew?: boolean
  isHot?: boolean
  discountRate?: number
  description: string
  category: string[]
  language: string
  lastUpdated: string
  duration?: {
    hours: number
    minutes: number
  }
  totalLessons?: number
  enrolled?: number
  syllabus: {
    sectionTitle: string
    lessons: {
      id: string
      title: string
      duration: string
      isFree?: boolean
      type: 'video' | 'quiz' | 'assignment'
    }[]
  }[]
  learningOutcomes: string[]
  requirements: string[]
  targetAudience: string[]
  features?: {
    certificateProvided: boolean
    lifetimeAccess: boolean
    downloadableResources: number
    liveQA: boolean
    mobileAccess: boolean
    assignments: boolean
  }
  reviews: {
    id: string
    userName: string
    userImage?: string
    rating: number
    date: string
    comment: string
    helpful: number
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

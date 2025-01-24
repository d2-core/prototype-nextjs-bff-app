import { PreviewLecture } from './lecture'

export interface Teacher {
  id: number
  nickname: string
  profileImageUrl: string
  expertises: string[]
  experiences: string[]
  description: string
  statics?: {
    courseCount: number
    sutdentCount: number
    courseTotalAverageRatings: number
    totalReviewCount: number
  }
  educations: {
    degree: string
    institution: string
    year: number
  }[]
  certificates: {
    name: string
    issuer: string
    year: number
  }[]
  achievements: string[]
  socialLinks?: {
    linkedin?: string
    github?: string
    website?: string
    twitter?: string
    youtube?: string
  }
}

export interface TeacherCourse {
  id?: number
  imageUrls: string[]
  title?: string
  tags: string[]
  price?: number
  courseLevelName?: string
  courseCategoryName?: string
  isNew?: boolean
  isUpdated?: boolean
  appUser?: {
    isBookmark?: boolean
  }
  teacher?: {
    id?: number
    imageUrl?: string
    nickname?: string
  }
  previewLectures: PreviewLecture[]
  statics?: {
    reviewAverageRating?: number
    reviewCount?: number
  }
}

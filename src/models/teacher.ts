export interface Teacher {
  id: number
  nickname: string
  profileImageUrl: string
  expertise: string[]
  experience: string[]
  description: string
  statics: {
    courseCount: number
    sutdentCount: number
    courseTotalAverageRatings: number
    totalReviewCount: number
  }
  education: {
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

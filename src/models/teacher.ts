export interface Teacher {
  id: number
  name: string
  profileImage: string
  role: string
  expertise: string[]
  experience: string[]
  description: string
  courses: number
  students: number
  rating: number
  reviews: number
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
  languages: {
    language: string
    proficiency: string
  }[]
  achievements: string[]
  upcomingCourses: {
    id: string
    title: string
    startDate: string
    duration: string
    enrolled: number
    maxCapacity: number
  }[]
  availableTimeSlots: {
    day: string
    times: string[]
  }[]
  socialLinks?: {
    linkedin?: string
    github?: string
    website?: string
    twitter?: string
    youtube?: string
  }
}

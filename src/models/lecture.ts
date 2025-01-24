export interface Lecture {
  id: number
  courseId: string
  title: string
  description: string
  videoUrl?: string
  duration: string
  order: number
}

export interface PreviewLecture {
  id?: number
  title?: string
  duration?: number
  videoUrl?: string
}

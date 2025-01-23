import { ReactNode } from 'react'

export interface Video {
  type: 'lecture'
  videoUrl: string
  title: ReactNode
}

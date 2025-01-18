import { ReactNode } from 'react'

export interface Faq {
  id: number
  icon: ReactNode
  title: string
  items: {
    q: string
    a: string
  }[]
}

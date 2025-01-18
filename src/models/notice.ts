export interface Notice {
  id: number
  title: string
  content: string
  category: string
  date: string
  isImportant: boolean
  author: string
  views: number
  attachments?: Array<{
    name: string
    size: string
  }>
  isRead: boolean
}

export interface Alarm {
  id: number
  message?: string
  type?: 'info' | 'warning' | 'success'
  isRead: boolean
  detail?: string
  date?: string
}

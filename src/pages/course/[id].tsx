import CourseDetail from '@/components/course/CourseDetail'
import { useRouter } from 'next/router'

function CourseDetailPage() {
  const route = useRouter()
  const { id } = route.query
  return <CourseDetail courseId={parseInt(id as string)} />
}

export default CourseDetailPage

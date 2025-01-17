import TeacherDetail from '@/components/teacher/TeacherDetail'
import { useRouter } from 'next/router'

function TeacherDetailPage() {
  const route = useRouter()
  const { id } = route.query
  return <TeacherDetail teacherId={parseInt(id as string)} />
}

export default TeacherDetailPage

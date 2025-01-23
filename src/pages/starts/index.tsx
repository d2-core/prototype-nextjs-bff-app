import TopNav from '@/components/shared/TopNav'
import { Box, Button, Container } from '@mui/material'
import AppIntrodutionBanner from '@/components/banner/AppIntrodutionBanner'
import CTA from '@/components/cta/CTA'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import TeacherHeader from '@/components/teacher/TeacherHeader'
import Spacing from '@/components/shared/Spacing'
import CTATeacher from '@/components/cta/CTATeacher'
import CourseHeader from '@/components/course/CourseHeader'
import CourseSideList from '@/components/course/CourseSideList'
import { useQueries } from 'react-query'
import { Api } from '@/models/api'
import { Teacher, TeacherCourse } from '@/models/teacher'
import { getTeacherCourseList, getTeacherList } from '@/remote/api/teacher'
import TeacherSideList from '@/components/teacher/TeacherSideList'

function StartPage() {
  const route = useRouter()
  const teacherPopularRef = useRef<HTMLDivElement>(null)
  const teacherNewRef = useRef<HTMLDivElement>(null)
  const teacherCouresPopularRef = useRef<HTMLDivElement>(null)
  const teacherCouresNewRef = useRef<HTMLDivElement>(null)
  const handleTeacherPageRoute = () => {
    route.push('/teachers')
  }

  const result = useQueries([
    {
      queryKey: ['teachers'],
      queryFn: async (): Promise<Api<Teacher[]>> => getTeacherList(),
    },
    {
      queryKey: ['teacher-courses'],
      queryFn: async (): Promise<Api<TeacherCourse[]>> =>
        getTeacherCourseList(),
    },
  ])

  const teachers = result[0].data?.body ?? []
  const teacherCourses = result[1].data?.body ?? []

  const handleScroll = (
    ref: React.RefObject<HTMLDivElement>,
    direction: 'left' | 'right',
  ) => {
    if (ref.current) {
      const scrollAmount = 300
      ref.current.scrollLeft +=
        direction === 'left' ? -scrollAmount : scrollAmount
    }
  }

  const handleCoursePageRoute = () => {
    route.push('/courses')
  }
  return (
    <Box>
      <TopNav />
      <Box>
        <AppIntrodutionBanner />
        <Box sx={{ py: 8, bgcolor: 'background.default' }}>
          <Container maxWidth="lg">
            <TeacherHeader />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
            >
              <TeacherSideList
                title="🔥 인기 선생님"
                teachers={teachers}
                scrollRef={teacherPopularRef}
                onScroll={(direction) =>
                  handleScroll(teacherPopularRef, direction)
                }
              />

              <TeacherSideList
                title="✨ 신규 선생님"
                teachers={teachers}
                scrollRef={teacherNewRef}
                onScroll={(direction) => handleScroll(teacherNewRef, direction)}
              />
              <Spacing size={16} />
              <Button onClick={handleTeacherPageRoute}>
                선생님 더 둘러보기
              </Button>
            </Box>

            <CTATeacher />

            <Spacing size={32} />

            <CourseHeader />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
            >
              <CourseSideList
                title="🔥 인기 강의"
                teacherCourses={teacherCourses}
                scrollRef={teacherCouresPopularRef}
                onScroll={(direction) =>
                  handleScroll(teacherCouresPopularRef, direction)
                }
              />

              <CourseSideList
                title="✨ 신규 강의"
                teacherCourses={teacherCourses}
                scrollRef={teacherCouresNewRef}
                onScroll={(direction) =>
                  handleScroll(teacherCouresNewRef, direction)
                }
              />
              <Button onClick={handleCoursePageRoute}>강의 더 둘러보기</Button>
            </Box>
          </Container>
        </Box>
        <CTA />
      </Box>
    </Box>
  )
}
export default StartPage

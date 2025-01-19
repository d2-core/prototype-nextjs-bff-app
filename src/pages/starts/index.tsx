import TopNav from '@/components/shared/TopNav'
import { Box, Button, Container, Grid } from '@mui/material'
import AppIntrodutionBanner from '@/components/banner/AppIntrodutionBanner'
import CTA from '@/components/cta/CTA'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import TeacherHeader from '@/components/teacher/TeacherHeader'
import TeacherCategoryFilter from '@/components/teacher/TeacherCategoryFilter'
import TeacherCard from '@/components/teacher/TeacherCard'
import Spacing from '@/components/shared/Spacing'
import CTATeacher from '@/components/cta/CTATeacher'
import CourseHeader from '@/components/course/CourseHeader'
import CourseSideList from '@/components/course/CourseSideList'
import { courses, teachers } from '@/utils/dummy'

function ProductPage() {
  const route = useRouter()
  const newRef = useRef<HTMLDivElement>(null)
  const popularRef = useRef<HTMLDivElement>(null)
  const handleTeacherPageRoute = () => {
    route.push('/teachers')
  }

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
              <TeacherCategoryFilter />
              <Grid container spacing={4}>
                {teachers.map((teacher) => (
                  <Grid item xs={12} sm={6} md={4} key={teacher.id}>
                    <TeacherCard teacher={teacher} />
                  </Grid>
                ))}
              </Grid>
              <Spacing size={16} />
              <Button onClick={handleTeacherPageRoute}>
                선생님 더 둘러보기
              </Button>
            </Box>
            <CTATeacher />
            <Spacing size={64} />
            <CourseHeader />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
            >
              <CourseSideList
                title="🔥 인기 강의"
                courses={courses}
                scrollRef={popularRef}
                onScroll={(direction) => handleScroll(popularRef, direction)}
              />

              <CourseSideList
                title="✨ 신규 강의"
                courses={courses}
                scrollRef={newRef}
                onScroll={(direction) => handleScroll(newRef, direction)}
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
export default ProductPage

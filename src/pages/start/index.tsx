import TopNav from '@/components/shared/TopNav'
import { Box } from '@mui/material'
import CourseSection from '@/components/course/CourseSection'
import TeacherSection from '@/components/teacher/TeacherSection'
import CTASection from '@/components/cta/CTASection'
import StartBannerSection from '@/components/banner/StartBannerSection'

function ProductPage() {
  return (
    <Box>
      <TopNav />
      <Box>
        <StartBannerSection />
        <TeacherSection />
        <CourseSection />
        <CTASection />
      </Box>
    </Box>
  )
}

export default ProductPage

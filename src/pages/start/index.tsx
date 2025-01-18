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
import { Course } from '@/models/course'
import { Teacher } from '@/models/teacher'

function ProductPage() {
  const route = useRouter()
  const newRef = useRef<HTMLDivElement>(null)
  const popularRef = useRef<HTMLDivElement>(null)
  const handleTeacherPageRoute = () => {
    route.push('/teacher')
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
    route.push('/course')
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
                courses={recommendedCourses}
                scrollRef={popularRef}
                onScroll={(direction) => handleScroll(popularRef, direction)}
              />

              <CourseSideList
                title="✨ 신규 강의"
                courses={recommendedCourses}
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

const recommendedCourses: Course[] = [
  {
    id: 'course-001',
    title: '처음 시작하는 React와 TypeScript',
    thumbnail: '/images/courses/react-ts.jpg',
    teacherName: '김민수',
    teacherImage: '/images/teachers/kimminsu.jpg',
    teacherId: 'teacher-001',
    level: 'beginner',
    price: 88000,
    originalPrice: 129000,
    rating: 4.8,
    reviewCount: 256,
    isNew: true,
    isHot: true,
    discountRate: 32,
    description:
      'React와 TypeScript의 기초부터 실전 프로젝트까지 단계별로 학습하는 강좌입니다.',
    category: ['개발', '웹개발', '프론트엔드'],
    language: '한국어',
    lastUpdated: '2024-01-15',
    duration: {
      hours: 28,
      minutes: 45,
    },
    totalLessons: 89,
    enrolled: 1250,
    syllabus: [
      {
        sectionTitle: 'React 기초',
        lessons: [
          {
            id: 'lesson-001',
            title: 'React란?',
            duration: '15:30',
            isFree: true,
            type: 'video',
          },
          {
            id: 'lesson-002',
            title: 'Components와 Props',
            duration: '25:15',
            type: 'video',
          },
        ],
      },
    ],
    learningOutcomes: [
      'React 컴포넌트 설계 및 구현',
      'TypeScript를 활용한 타입 안전성 확보',
      '실전 프로젝트 경험',
    ],
    requirements: ['HTML, CSS, JavaScript 기초 지식', '웹 개발 기초 이해'],
    targetAudience: [
      'React 입문자',
      'TypeScript를 배우고 싶은 개발자',
      '프론트엔드 개발자로 전환하고 싶은 분',
    ],
    features: {
      certificateProvided: true,
      lifetimeAccess: true,
      downloadableResources: 15,
      liveQA: true,
      mobileAccess: true,
      assignments: true,
    },
    reviews: [
      {
        id: 'review-001',
        userName: '박지성',
        userImage: '/images/users/user1.jpg',
        rating: 5,
        date: '2024-01-10',
        comment: '초보자도 쉽게 이해할 수 있게 설명해주셔서 좋았습니다.',
        helpful: 45,
      },
    ],
    faqs: [
      {
        question: '수강 기간은 얼마인가요?',
        answer: '구매 후 평생 수강 가능합니다.',
      },
    ],
  },
  {
    id: 'course-002',
    title: '실전 Python 데이터 분석',
    thumbnail: '/images/courses/python-data.jpg',
    teacherName: '이수진',
    teacherImage: '/images/teachers/leesujin.jpg',
    teacherId: 'teacher-002',
    level: 'intermediate',
    price: 99000,
    originalPrice: 149000,
    rating: 4.9,
    reviewCount: 189,
    isHot: true,
    discountRate: 34,
    description:
      'Python을 활용한 데이터 분석의 A to Z를 배우는 실전 강좌입니다.',
    category: ['개발', '데이터분석', 'Python'],
    language: '한국어',
    lastUpdated: '2024-01-12',
    duration: {
      hours: 32,
      minutes: 20,
    },
    totalLessons: 95,
    enrolled: 890,
    syllabus: [
      {
        sectionTitle: '데이터 분석 기초',
        lessons: [
          {
            id: 'lesson-003',
            title: 'Pandas 시작하기',
            duration: '20:15',
            isFree: true,
            type: 'video',
          },
        ],
      },
    ],
    learningOutcomes: [
      '데이터 전처리 및 분석',
      '시각화 도구 활용',
      '실무 데이터 분석 프로젝트',
    ],
    requirements: ['Python 기초 지식', '기초 통계 이해'],
    targetAudience: [
      '데이터 분석가 지망생',
      '업무에 데이터 분석을 활용하고 싶은 직장인',
    ],
    features: {
      certificateProvided: true,
      lifetimeAccess: true,
      downloadableResources: 25,
      liveQA: true,
      mobileAccess: true,
      assignments: true,
    },
    reviews: [
      {
        id: 'review-002',
        userName: '김영희',
        rating: 5,
        date: '2024-01-08',
        comment: '실무에서 바로 활용할 수 있는 내용이라 좋았습니다.',
        helpful: 32,
      },
    ],
    faqs: [
      {
        question: '노트북은 필수인가요?',
        answer: '실습을 위해 노트북이 필요합니다.',
      },
    ],
  },
  {
    id: 'course-003',
    title: 'AWS 클라우드 아키텍처 마스터',
    thumbnail: '/images/courses/aws-master.jpg',
    teacherName: '홍길동',
    teacherImage: '/images/teachers/hong.jpg',
    teacherId: 'teacher-003',
    level: 'advanced',
    price: 129000,
    originalPrice: 199000,
    rating: 4.7,
    reviewCount: 156,
    isNew: true,
    discountRate: 35,
    description:
      'AWS 서비스의 심화 내용과 실전 아키텍처 설계를 배우는 강좌입니다.',
    category: ['개발', '클라우드', 'DevOps'],
    language: '한국어',
    lastUpdated: '2024-01-05',
    duration: {
      hours: 40,
      minutes: 30,
    },
    totalLessons: 102,
    enrolled: 450,
    syllabus: [
      {
        sectionTitle: 'AWS 기초 아키텍처',
        lessons: [
          {
            id: 'lesson-004',
            title: 'VPC 설계하기',
            duration: '30:00',
            type: 'video',
          },
        ],
      },
    ],
    learningOutcomes: ['클라우드 아키텍처 설계', '비용 최적화', '보안 설정'],
    requirements: ['기본적인 네트워크 지식', '리눅스 기초'],
    targetAudience: ['클라우드 엔지니어', 'DevOps 엔지니어'],
    features: {
      certificateProvided: true,
      lifetimeAccess: true,
      downloadableResources: 30,
      liveQA: true,
      mobileAccess: true,
      assignments: true,
    },
    reviews: [
      {
        id: 'review-003',
        userName: '이태준',
        userImage: '/images/users/user3.jpg',
        rating: 4,
        date: '2024-01-03',
        comment: '실무에서 바로 적용할 수 있는 내용이 많았습니다.',
        helpful: 28,
      },
    ],
    faqs: [
      {
        question: 'AWS 계정이 필요한가요?',
        answer: '실습을 위해 AWS 프리티어 계정이 필요합니다.',
      },
    ],
  },
  {
    id: 'course-004',
    title: 'Flutter 모바일 앱 개발',
    thumbnail: '/images/courses/flutter-dev.jpg',
    teacherName: '정다인',
    teacherImage: '/images/teachers/jung.jpg',
    teacherId: 'teacher-004',
    level: 'intermediate',
    price: 77000,
    originalPrice: 110000,
    rating: 4.6,
    reviewCount: 234,
    isHot: true,
    discountRate: 30,
    description:
      'Flutter를 사용하여 iOS와 Android 앱을 동시에 개발하는 방법을 배웁니다.',
    category: ['개발', '모바일', '앱개발'],
    language: '한국어',
    lastUpdated: '2024-01-08',
    duration: {
      hours: 35,
      minutes: 15,
    },
    totalLessons: 88,
    enrolled: 780,
    syllabus: [
      {
        sectionTitle: 'Flutter 위젯 기초',
        lessons: [
          {
            id: 'lesson-005',
            title: 'StatelessWidget vs StatefulWidget',
            duration: '22:30',
            type: 'video',
          },
        ],
      },
    ],
    learningOutcomes: ['크로스플랫폼 앱 개발', '상태관리', 'UI/UX 디자인'],
    requirements: ['Dart 기초', '모바일 앱 개발 기초'],
    targetAudience: ['모바일 앱 개발자', 'UI/UX 디자이너'],
    features: {
      certificateProvided: true,
      lifetimeAccess: true,
      downloadableResources: 20,
      liveQA: true,
      mobileAccess: true,
      assignments: true,
    },
    reviews: [
      {
        id: 'review-004',
        userName: '최민지',
        rating: 5,
        date: '2024-01-07',
        comment: 'Flutter의 기초부터 실전까지 잘 배울 수 있었습니다.',
        helpful: 41,
      },
    ],
    faqs: [
      {
        question: 'Mac이 필요한가요?',
        answer: 'iOS 빌드를 위해서는 Mac이 필요합니다.',
      },
    ],
  },
  {
    id: 'course-005',
    title: 'Spring Boot JPA 실전',
    thumbnail: '/images/courses/spring-jpa.jpg',
    teacherName: '박현우',
    teacherImage: '/images/teachers/park.jpg',
    teacherId: 'teacher-005',
    level: 'advanced',
    price: 110000,
    originalPrice: 159000,
    rating: 4.9,
    reviewCount: 167,
    isNew: true,
    discountRate: 31,
    description:
      'Spring Boot와 JPA를 활용한 실전 웹 애플리케이션 개발 강좌입니다.',
    category: ['개발', '백엔드', 'Java'],
    language: '한국어',
    lastUpdated: '2024-01-14',
    duration: {
      hours: 45,
      minutes: 30,
    },
    totalLessons: 120,
    enrolled: 560,
    syllabus: [
      {
        sectionTitle: 'JPA 기초',
        lessons: [
          {
            id: 'lesson-006',
            title: '엔티티 매핑',
            duration: '28:15',
            type: 'video',
          },
        ],
      },
    ],
    learningOutcomes: [
      'JPA 기반 도메인 설계',
      '성능 최적화',
      '테스트 코드 작성',
    ],
    requirements: ['Java 중급 이상', 'Spring Framework 기초'],
    targetAudience: ['백엔드 개발자', 'Java 개발자'],
    features: {
      certificateProvided: true,
      lifetimeAccess: true,
      downloadableResources: 35,
      liveQA: true,
      mobileAccess: true,
      assignments: true,
    },
    reviews: [
      {
        id: 'review-005',
        userName: '김주영',
        userImage: '/images/users/user5.jpg',
        rating: 5,
        date: '2024-01-13',
        comment:
          '실무에서 자주 마주치는 문제들에 대한 해결책을 배울 수 있었습니다.',
        helpful: 52,
      },
    ],
    faqs: [
      {
        question: 'Java 버전은 몇을 사용하나요?',
        answer: 'Java 17을 사용합니다.',
      },
    ],
  },
]

const teachers: Teacher[] = [
  {
    id: '1',
    name: 'John Doe',
    profileImage: '/profile1.jpg',
    role: 'Senior Developer',
    expertise: ['React', 'TypeScript', 'Node.js'],
    experience: ['10+ years in web development', 'Former Tech Lead at Google'],
    description:
      'Passionate about teaching web development and helping others grow.',
    courses: 5,
    students: 1200,
    rating: 4.8,
    reviews: 150,
    socialLinks: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      website: 'https://example.com',
    },
    education: [],
    certificates: [],
    languages: [],
    achievements: [],
    upcomingCourses: [],
    availableTimeSlots: [],
  },
]

export default ProductPage

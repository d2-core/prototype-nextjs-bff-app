import { useRef } from 'react'
import { Box, Button, Container } from '@mui/material'

import { Course } from '@/models/course'
import CourseSectionList from './CourseSectionList'
import CourseSectionHeader from './CourseSectionHeader'
import { useRouter } from 'next/router'

export const recommendedCourses: Course[] = [
  {
    id: 'rec1',
    title: 'React로 배우는 현대적 웹 개발',
    thumbnail: '/api/placeholder/400/250',
    teacherName: '김영희',
    teacherImage: '/api/placeholder/50/50',
    level: 'intermediate',
    price: 99000,
    rating: 4.9,
    reviewCount: 428,
    isHot: true,
    description: 'React와 현대적인 웹 개발 도구를 활용한 실전 프로젝트',
  },
  {
    id: 'rec2',
    title: 'TypeScript 마스터 클래스',
    thumbnail: '/api/placeholder/400/250',
    teacherName: '이민수',
    teacherImage: '/api/placeholder/50/50',
    level: 'advanced',
    price: 88000,
    rating: 4.8,
    reviewCount: 325,
    description: '타입스크립트의 고급 기능과 실전 활용법',
  },
  {
    id: 'rec3',
    title: 'Next.js로 시작하는 풀스택 개발',
    thumbnail: '/api/placeholder/400/250',
    teacherName: '박지원',
    teacherImage: '/api/placeholder/50/50',
    level: 'intermediate',
    price: 110000,
    rating: 4.7,
    reviewCount: 256,
    description: 'Next.js를 활용한 현대적인 풀스택 애플리케이션 개발',
  },
  {
    id: 'rec4',
    title: '실전 Node.js 백엔드 개발',
    thumbnail: '/api/placeholder/400/250',
    teacherName: '최현우',
    teacherImage: '/api/placeholder/50/50',
    level: 'advanced',
    price: 132000,
    rating: 4.9,
    reviewCount: 189,
    description: 'Node.js 기반의 확장 가능한 백엔드 시스템 설계',
  },
]

// 신규 강의
export const newCourses: Course[] = [
  {
    id: 'new1',
    title: 'Flutter 모바일 앱 개발 입문',
    thumbnail: '/api/placeholder/400/250',
    teacherName: '정다인',
    teacherImage: '/api/placeholder/50/50',
    level: 'beginner',
    price: 77000,
    rating: 4.5,
    reviewCount: 42,
    isNew: true,
    description: 'Flutter를 사용한 크로스 플랫폼 모바일 앱 개발',
  },
  {
    id: 'new2',
    title: 'AWS 클라우드 아키텍처 설계',
    thumbnail: '/api/placeholder/400/250',
    teacherName: '김태호',
    teacherImage: '/api/placeholder/50/50',
    level: 'advanced',
    price: 165000,
    rating: 4.8,
    reviewCount: 28,
    isNew: true,
    description: 'AWS 기반의 확장 가능한 클라우드 아키텍처 설계',
  },
  {
    id: 'new3',
    title: 'Firebase로 만드는 서버리스 앱',
    thumbnail: '/api/placeholder/400/250',
    teacherName: '이수진',
    teacherImage: '/api/placeholder/50/50',
    level: 'intermediate',
    price: 88000,
    rating: 4.6,
    reviewCount: 35,
    isNew: true,
    description: 'Firebase를 활용한 현대적인 서버리스 애플리케이션 개발',
  },
]

// 인기 강의
export const popularCourses: Course[] = [
  {
    id: 'pop1',
    title: '프론트엔드 성능 최적화',
    thumbnail: '/api/placeholder/400/250',
    teacherName: '박성훈',
    teacherImage: '/api/placeholder/50/50',
    level: 'advanced',
    price: 143000,
    rating: 4.9,
    reviewCount: 752,
    isHot: true,
    description: '웹 성능 최적화를 위한 실전 테크닉',
  },
  {
    id: 'pop2',
    title: '실전 React Native 앱 개발',
    thumbnail: '/api/placeholder/400/250',
    teacherName: '김민지',
    teacherImage: '/api/placeholder/50/50',
    level: 'intermediate',
    price: 99000,
    rating: 4.8,
    reviewCount: 651,
    isHot: true,
    description: 'React Native로 만드는 네이티브 모바일 앱',
  },
  {
    id: 'pop3',
    title: 'Docker & Kubernetes 실전 가이드',
    thumbnail: '/api/placeholder/400/250',
    teacherName: '이상현',
    teacherImage: '/api/placeholder/50/50',
    level: 'advanced',
    price: 165000,
    rating: 4.9,
    reviewCount: 483,
    isHot: true,
    description: '컨테이너화와 오케스트레이션 실전 가이드',
  },
]

// 할인 강의
export const saleCourses: Course[] = [
  {
    id: 'sale1',
    title: '처음 시작하는 Python 프로그래밍',
    thumbnail: '/api/placeholder/400/250',
    teacherName: '오지훈',
    teacherImage: '/api/placeholder/50/50',
    level: 'beginner',
    price: 49500,
    originalPrice: 99000,
    rating: 4.7,
    reviewCount: 528,
    discountRate: 50,
    description: '파이썬 기초부터 실전까지',
  },
  {
    id: 'sale2',
    title: 'Java Spring 백엔드 개발',
    thumbnail: '/api/placeholder/400/250',
    teacherName: '임재원',
    teacherImage: '/api/placeholder/50/50',
    level: 'intermediate',
    price: 66000,
    originalPrice: 110000,
    rating: 4.8,
    reviewCount: 423,
    discountRate: 40,
    description: 'Spring Framework를 활용한 백엔드 개발',
  },
  {
    id: 'sale3',
    title: 'UI/UX 디자인 실무 가이드',
    thumbnail: '/api/placeholder/400/250',
    teacherName: '한소영',
    teacherImage: '/api/placeholder/50/50',
    level: 'intermediate',
    price: 55000,
    originalPrice: 88000,
    rating: 4.6,
    reviewCount: 367,
    discountRate: 35,
    description: '사용자 중심의 UI/UX 디자인 프로세스',
  },
]

// 강의 섹션 컴포넌트
const CourseSection = () => {
  const route = useRouter()
  const newRef = useRef<HTMLDivElement>(null)
  const popularRef = useRef<HTMLDivElement>(null)

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
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <CourseSectionHeader />

        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <CourseSectionList
            title="🔥 인기 강의"
            courses={popularCourses}
            scrollRef={popularRef}
            onScroll={(direction) => handleScroll(popularRef, direction)}
          />

          <CourseSectionList
            title="✨ 신규 강의"
            courses={newCourses}
            scrollRef={newRef}
            onScroll={(direction) => handleScroll(newRef, direction)}
          />
          <Button onClick={handleCoursePageRoute}>강의 더 둘러보기</Button>
        </Box>
      </Container>
    </Box>
  )
}

export default CourseSection

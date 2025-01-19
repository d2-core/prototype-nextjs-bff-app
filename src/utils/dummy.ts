import { Course } from '@/models/course'
import { Alarm } from '@/models/notice'
import { Question } from '@/models/question'
import { Review } from '@/models/review'
import { Teacher } from '@/models/teacher'

export const teachers: Teacher[] = [
  {
    id: 1,
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

export const courses: Course[] = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    thumbnail: '/course1.jpg',
    teacherName: 'John Doe',
    teacherImage: '/profile1.jpg',
    teacherId: '1',
    level: 'beginner',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 1250,
    isNew: true,
    isHot: true,
    discountRate: 50,
    description:
      'Comprehensive web development course covering frontend and backend',
    category: ['Web Development', 'JavaScript', 'React'],
    language: 'English',
    lastUpdated: '2024-01-15',
    syllabus: [],
    learningOutcomes: [],
    requirements: [],
    targetAudience: [],
    reviews: [],
    faqs: [],
    progress: 0,
  },
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    thumbnail: '/course1.jpg',
    teacherName: 'John Doe',
    teacherImage: '/profile1.jpg',
    teacherId: '1',
    level: 'beginner',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 1250,
    isNew: true,
    isHot: true,
    discountRate: 50,
    description:
      'Comprehensive web development course covering frontend and backend',
    category: ['Web Development', 'JavaScript', 'React'],
    language: 'English',
    lastUpdated: '2024-01-15',
    syllabus: [],
    learningOutcomes: [],
    requirements: [],
    targetAudience: [],
    reviews: [],
    faqs: [],
    progress: 0,
  },
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    thumbnail: '/course1.jpg',
    teacherName: 'John Doe',
    teacherImage: '/profile1.jpg',
    teacherId: '1',
    level: 'beginner',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 1250,
    isNew: true,
    isHot: true,
    discountRate: 50,
    description:
      'Comprehensive web development course covering frontend and backend',
    category: ['Web Development', 'JavaScript', 'React'],
    language: 'English',
    lastUpdated: '2024-01-15',
    syllabus: [],
    learningOutcomes: [],
    requirements: [],
    targetAudience: [],
    reviews: [],
    faqs: [],
    progress: 0,
  },
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    thumbnail: '/course1.jpg',
    teacherName: 'John Doe',
    teacherImage: '/profile1.jpg',
    teacherId: '1',
    level: 'beginner',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 1250,
    isNew: true,
    isHot: true,
    discountRate: 50,
    description:
      'Comprehensive web development course covering frontend and backend',
    category: ['Web Development', 'JavaScript', 'React'],
    language: 'English',
    lastUpdated: '2024-01-15',
    syllabus: [],
    learningOutcomes: [],
    requirements: [],
    targetAudience: [],
    reviews: [],
    faqs: [],
    progress: 0,
  },
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    thumbnail: '/course1.jpg',
    teacherName: 'John Doe',
    teacherImage: '/profile1.jpg',
    teacherId: '1',
    level: 'beginner',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 1250,
    isNew: true,
    isHot: true,
    discountRate: 50,
    description:
      'Comprehensive web development course covering frontend and backend',
    category: ['Web Development', 'JavaScript', 'React'],
    language: 'English',
    lastUpdated: '2024-01-15',
    syllabus: [],
    learningOutcomes: [],
    requirements: [],
    targetAudience: [],
    reviews: [],
    faqs: [],
    progress: 0,
  },
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    thumbnail: '/course1.jpg',
    teacherName: 'John Doe',
    teacherImage: '/profile1.jpg',
    teacherId: '1',
    level: 'beginner',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 1250,
    isNew: true,
    isHot: true,
    discountRate: 50,
    description:
      'Comprehensive web development course covering frontend and backend',
    category: ['Web Development', 'JavaScript', 'React'],
    language: 'English',
    lastUpdated: '2024-01-15',
    syllabus: [],
    learningOutcomes: [],
    requirements: [],
    targetAudience: [],
    reviews: [],
    faqs: [],
    progress: 0,
  },
]

export const courseDumy: Course = {
  id: 1,
  title: 'Complete React Development with TypeScript',
  thumbnail: '/images/react-course.jpg',
  teacherName: 'Dr. Sarah Johnson',
  teacherImage: '/images/sarah.jpg',
  teacherId: 'teacher1',
  level: 'intermediate',
  price: 129.99,
  originalPrice: 199.99,
  rating: 4.8,
  reviewCount: 350,
  isHot: true,
  discountRate: 35,
  description: 'Master modern React development with TypeScript...',
  category: ['Programming', 'Web Development', 'Frontend'],
  language: 'English',
  lastUpdated: '2024-01-15',
  duration: {
    hours: 32,
    minutes: 45,
  },
  totalLessons: 185,
  enrolled: 2500,
  syllabus: [
    {
      sectionTitle: 'Getting Started with React',
      lessons: [
        {
          id: 'l1',
          title: 'Introduction to React',
          duration: '15:30',
          isFree: true,
          type: 'video',
        },
        {
          id: 'l2',
          title: 'Setting up Development Environment',
          duration: '20:45',
          type: 'video',
        },
      ],
    },
    {
      sectionTitle: 'TypeScript Fundamentals',
      lessons: [
        {
          id: 'l3',
          title: 'TypeScript Basics Quiz',
          duration: '30:00',
          type: 'quiz',
        },
      ],
    },
    {
      sectionTitle: 'Getting Started with React',
      lessons: [
        {
          id: 'l1',
          title: 'Introduction to React',
          duration: '15:30',
          isFree: true,
          type: 'video',
        },
        {
          id: 'l2',
          title: 'Setting up Development Environment',
          duration: '20:45',
          type: 'video',
        },
      ],
    },
    {
      sectionTitle: 'TypeScript Fundamentals',
      lessons: [
        {
          id: 'l3',
          title: 'TypeScript Basics Quiz',
          duration: '30:00',
          type: 'quiz',
        },
      ],
    },
    {
      sectionTitle: 'Getting Started with React',
      lessons: [
        {
          id: 'l1',
          title: 'Introduction to React',
          duration: '15:30',
          isFree: true,
          type: 'video',
        },
        {
          id: 'l2',
          title: 'Setting up Development Environment',
          duration: '20:45',
          type: 'video',
        },
      ],
    },
    {
      sectionTitle: 'TypeScript Fundamentals',
      lessons: [
        {
          id: 'l3',
          title: 'TypeScript Basics Quiz',
          duration: '30:00',
          type: 'quiz',
        },
      ],
    },
    {
      sectionTitle: 'Getting Started with React',
      lessons: [
        {
          id: 'l1',
          title: 'Introduction to React',
          duration: '15:30',
          isFree: true,
          type: 'video',
        },
        {
          id: 'l2',
          title: 'Setting up Development Environment',
          duration: '20:45',
          type: 'video',
        },
      ],
    },
    {
      sectionTitle: 'TypeScript Fundamentals',
      lessons: [
        {
          id: 'l3',
          title: 'TypeScript Basics Quiz',
          duration: '30:00',
          type: 'quiz',
        },
      ],
    },
    {
      sectionTitle: 'Getting Started with React',
      lessons: [
        {
          id: 'l1',
          title: 'Introduction to React',
          duration: '15:30',
          isFree: true,
          type: 'video',
        },
        {
          id: 'l2',
          title: 'Setting up Development Environment',
          duration: '20:45',
          type: 'video',
        },
      ],
    },
    {
      sectionTitle: 'TypeScript Fundamentals',
      lessons: [
        {
          id: 'l3',
          title: 'TypeScript Basics Quiz',
          duration: '30:00',
          type: 'quiz',
        },
      ],
    },
    {
      sectionTitle: 'Getting Started with React',
      lessons: [
        {
          id: 'l1',
          title: 'Introduction to React',
          duration: '15:30',
          isFree: true,
          type: 'video',
        },
        {
          id: 'l2',
          title: 'Setting up Development Environment',
          duration: '20:45',
          type: 'video',
        },
      ],
    },
    {
      sectionTitle: 'TypeScript Fundamentals',
      lessons: [
        {
          id: 'l3',
          title: 'TypeScript Basics Quiz',
          duration: '30:00',
          type: 'quiz',
        },
      ],
    },
  ],
  learningOutcomes: [
    'Build complex React applications using TypeScript',
    'Implement state management with Redux Toolkit',
    'Create reusable custom hooks and components',
    'Master React performance optimization techniques',
  ],
  requirements: [
    'Basic JavaScript knowledge',
    'Understanding of HTML and CSS',
    'Familiarity with web development concepts',
  ],
  targetAudience: [
    'Web developers looking to learn React',
    'JavaScript developers wanting to transition to TypeScript',
    'Frontend developers seeking to upgrade their skills',
  ],
  features: {
    certificateProvided: true,
    lifetimeAccess: true,
    downloadableResources: 45,
    liveQA: true,
    mobileAccess: true,
    assignments: true,
  },
  reviews: [
    {
      id: 'r1',
      userName: 'John Doe',
      userImage: '/images/john.jpg',
      rating: 5,
      date: '2024-01-10',
      comment: 'Excellent course! The content is well-structured...',
      helpful: 25,
    },
  ],
  faqs: [
    {
      question: 'Is this course suitable for beginners?',
      answer: 'While some basic JavaScript knowledge is recommended...',
    },
  ],
  progress: 0,
}

export const lectures: Lecture[] = [
  {
    id: 1,
    courseId: 'course_web_basic',
    title: '웹 개발 시작하기: HTML 기초',
    description:
      'HTML의 기본 구조와 주요 태그들을 학습합니다. 웹 페이지의 뼈대를 만드는 방법을 배워봅시다.',
    videoUrl: 'https://example.com/videos/html-basics',
    duration: '45:00',
    order: 1,
  },
  {
    id: 1,
    courseId: 'course_web_basic',
    title: 'CSS 스타일링 마스터하기',
    description:
      'CSS를 활용한 웹 페이지 스타일링의 기본 개념과 실전 테크닉을 다룹니다.',
    videoUrl: 'https://example.com/videos/css-styling',
    duration: '38:30',
    order: 2,
  },
  {
    id: 1,
    courseId: 'course_web_basic',
    title: '반응형 웹 디자인 실습',
    description:
      'Media Query를 활용한 반응형 웹 디자인 구현 방법을 실습을 통해 학습합니다.',
    videoUrl: 'https://example.com/videos/responsive-design',
    duration: '52:15',
    order: 3,
  },
  {
    id: 1,
    courseId: 'course_js_basic',
    title: '자바스크립트 기초: 변수와 함수',
    description:
      '자바스크립트의 기본 문법과 함수 작성법을 배웁니다. 프로그래밍의 기초를 다질 수 있습니다.',
    videoUrl: 'https://example.com/videos/js-basics',
    duration: '41:20',
    order: 1,
  },
  {
    id: 1,
    courseId: 'course_js_basic',
    title: 'DOM 조작과 이벤트 핸들링',
    description:
      '웹 페이지의 요소를 동적으로 조작하는 방법과 사용자 이벤트 처리 방법을 학습합니다.',
    videoUrl: 'https://example.com/videos/dom-events',
    duration: '49:45',
    order: 2,
  },
  {
    id: 1,
    courseId: 'course_react_basic',
    title: 'React 입문: 컴포넌트 기초',
    description:
      'React의 핵심 개념인 컴포넌트에 대해 배우고, 간단한 컴포넌트를 직접 만들어봅니다.',
    videoUrl: 'https://example.com/videos/react-components',
    duration: '55:00',
    order: 1,
  },
  {
    id: 1,
    courseId: 'course_react_basic',
    title: 'React Hooks 활용하기',
    description:
      'useState와 useEffect를 중심으로 React Hooks의 기본 사용법을 익힙니다.',
    videoUrl: 'https://example.com/videos/react-hooks',
    duration: '47:30',
    order: 2,
  },
  {
    id: 1,
    courseId: 'course_react_basic',
    title: '실전 프로젝트: Todo List 만들기',
    description:
      '지금까지 배운 내용을 활용하여 실제 Todo List 애플리케이션을 제작합니다.',
    videoUrl: 'https://example.com/videos/react-project',
    duration: '63:20',
    order: 3,
  },
]

export const reviews: Review[] = [
  {
    id: 2,
    userId: 1,
    userName: 'John Smith',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    rating: 4.5,
    date: '2024-01-15',
    comment:
      'This React course is exceptional! The instructor breaks down complex concepts into digestible pieces. The practical projects really helped solidify my understanding. Highly recommended for anyone looking to master React and TypeScript.',
    helpful: 42,
    courseName: 'Complete React Development with TypeScript',
    courseCategory: 'Programming',
    verified: true,
  },
  {
    id: 2,
    userId: 3,
    userName: 'Emma Wilson',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    rating: 5,
    date: '2024-01-14',
    comment: `The best UX design course I've taken so far. The assignments were challenging but very practical. I've already started applying what I learned in my daily work. The instructor's feedback was always constructive and helpful.'`,
    helpful: 38,
    courseName: 'Advanced UX Design Principles',
    courseCategory: 'Design',
    verified: true,
  },
  {
    id: 2,
    userId: 4,
    userName: 'Michael Chen',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    rating: 3.5,
    date: '2024-01-13',
    comment:
      'Good content but the pace was a bit fast for beginners. Would appreciate more practical examples. The course materials were comprehensive though, and the community support was helpful.',
    helpful: 15,
    courseName: 'Digital Marketing Fundamentals',
    courseCategory: 'Marketing',
    verified: false,
  },
  {
    id: 2,
    userId: 7,
    userName: 'Sarah Johnson',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
    rating: 5,
    date: '2024-01-12',
    comment:
      'Incredible value for money! The business strategy frameworks taught in this course have completely changed how I approach my work. The case studies were particularly enlightening.',
    helpful: 56,
    courseName: 'Strategic Business Management',
    courseCategory: 'Business',
    verified: true,
  },
  {
    id: 2,
    userId: 6,
    userName: 'David Kim',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5',
    rating: 4,
    date: '2024-01-11',
    comment:
      'The Python programming section was excellent, especially the data analysis modules. However, I wish there were more advanced topics covered. Great for beginners and intermediate learners.',
    helpful: 28,
    courseName: 'Python for Data Science',
    courseCategory: 'Programming',
    verified: true,
  },
]

export const questions: Question[] = [
  {
    id: 1,
    userName: 'Alex Kim',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    date: '2024-01-15',
    title: 'How to implement custom hooks with TypeScript?',
    content:
      "I'm trying to create a custom hook for form validation but having trouble with TypeScript types. Can someone explain how to properly type the return values?",
    courseName: 'Advanced React Development',
    courseCategory: 'Programming',
    likes: 15,
    answers: 3,
    isAnswered: true,
    isInstructor: false,
    tags: ['react', 'typescript', 'hooks'],
  },
  {
    id: 2,
    userName: 'Sarah Johnson',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    date: '2024-01-14',
    title: 'Best practices for responsive design in 2024',
    content:
      'What are the current best practices for responsive web design? Are CSS Grid and Flexbox still the way to go?',
    courseName: 'Modern Web Design',
    courseCategory: 'Design',
    likes: 8,
    answers: 2,
    isAnswered: false,
    isInstructor: true,
    tags: ['css', 'responsive-design', 'web-design'],
  },
  {
    id: 3,
    userName: 'Mike Chen',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    date: '2024-01-13',
    title: 'SEO optimization techniques for React applications',
    content:
      'Looking for modern SEO techniques specifically for React-based applications. What are the best practices in 2024?',
    courseName: 'Digital Marketing',
    courseCategory: 'Marketing',
    likes: 12,
    answers: 4,
    isAnswered: true,
    isInstructor: false,
    tags: ['seo', 'react', 'marketing'],
  },
]

export const questionDumy = {
  id: '1',
  title: 'How to implement custom hooks with TypeScript?',
  content: `I'm working on a React project with TypeScript and I'm trying to create a custom hook for form validation. I'm having some trouble with the TypeScript types.

Here's what I've tried so far:

\`\`\`typescript
function useFormValidation<T>(initialState: T) {
  // Implementation here
}
\`\`\`

Can someone explain how to properly type the return values and handle generic types in custom hooks?`,
  userName: 'Alex Kim',
  userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
  date: '2024-01-15',
  courseName: 'Advanced React Development',
  courseCategory: 'Programming',
  likes: 15,
  isLiked: false,
  isBookmarked: false,
  tags: ['react', 'typescript', 'hooks'],
  isAnswered: true,
  isInstructor: false,
  views: 234,
}

export const answersDumy = [
  {
    id: 'a1',
    userName: 'Sarah Johnson',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    content: `Here's an example of how you can implement a custom hook with TypeScript:

\`\`\`typescript
interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
}

function useFormValidation<T extends Record<string, any>>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Implementation details...

  return { values, errors, handleChange, handleSubmit };
}
\`\`\`

The key is to use generic types to maintain type safety throughout your form handling logic.`,
    date: '2024-01-15',
    likes: 8,
    isLiked: false,
    isInstructor: true,
    isAccepted: true,
  },
  {
    id: 'a2',
    userName: 'Mike Chen',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    content:
      'Another approach would be to use a validation schema library like Zod or Yup...',
    date: '2024-01-16',
    likes: 3,
    isLiked: false,
    isInstructor: false,
    isAccepted: false,
  },
]

export const reviewRatingCategorys = [
  {
    id: 1,
    label: '강의 내용',
    description: '강의 자료의 품질과 깊이',
  },
  {
    id: 2,
    label: '강사',
    description: '강의 스타일과 효과',
  },
  {
    id: 3,
    label: '학습 자료',
    description: '실습, 과제, 자료의 품질',
  },
  {
    id: 4,
    label: '학습 지원',
    description: '질문과 문제 해결에 대한 응답성',
  },
]

export const questionAvaliavleTags = [
  'react',
  'typescript',
  'javascript',
  'css',
  'html',
  'nextjs',
  'hooks',
  'redux',
  'styling',
  'testing',
  '성능최적화',
  '디버깅',
  '상태관리',
  'api',
  '인증',
]

export const notices = [
  {
    id: 1,
    title: 'System Maintenance Notice',
    content: `We will be performing scheduled system maintenance to improve our services.
    During this time, all systems will be unavailable.
    Maintenance Schedule:
    - Start: January 20, 2024 2:00 AM EST
    - End: January 20, 2024 4:00 AM EST
    What to expect:
    1. Complete system downtime
    2. Automatic logout of all users
    3. Temporary service interruption
    Please save your work and log out before the maintenance begins.
    We apologize for any inconvenience this may cause.`,
    category: 'System',
    date: '2024-01-18',
    isImportant: true,
    author: 'System Admin',
    views: 245,
    attachments: [
      { name: 'maintenance_schedule.pdf', size: '524 KB' },
      { name: 'system_updates.docx', size: '128 KB' },
    ],
    isRead: false,
  },
]

export const alarams: Alarm[] = [
  {
    id: 1,
    message: 'Your request has been approved',
    date: '2024-01-18 15:45',
    type: 'success',
    isRead: false,
  },
  {
    id: 2,
    message: 'New comment on your post',
    date: '2024-01-18 13:20',
    type: 'info',
    isRead: false,
  },
  {
    id: 3,
    message: 'Please update your password',
    date: '2024-01-17 11:30',
    type: 'warning',
    isRead: true,
  },
]

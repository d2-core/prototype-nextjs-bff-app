import { Payment, School } from '@mui/icons-material'
import { Box, Container } from '@mui/material'
import { useState } from 'react'
import FAQHeader from './FAQHeader'
import { Faq } from '@/models/faq'
import FAQAddQuestion from './FAQAddQuestion'
import FAQList from './FAQList'

const faqDatas: Faq[] = [
  {
    id: 1,
    icon: <School />,
    title: '선생님 관련',
    items: [
      {
        q: '선생님으로 등록하고 싶어요. 어떻게 해야 하나요?',
        a: "Creation Academy에서는 전문성 있는 선생님들을 모시고 있습니다. 선생님 지원은 '선생님 지원하기' 버튼을 통해 가능하며, 심사 후 승인이 이루어집니다.",
      },
      {
        q: '선생님의 전문성은 어떻게 검증하나요?',
        a: '모든 선생님들은 해당 분야 실무 경력 5년 이상을 보유하고 있으며, 포트폴리오와 경력 검증을 거쳐 선발됩니다.',
      },
      {
        q: '선생님과 직접 상담이 가능한가요?',
        a: '네, 각 선생님의 프로필 페이지에서 1:1 상담 신청이 가능합니다. 상담은 화상 또는 채팅으로 진행됩니다.',
      },
      {
        q: '선생님의 수업 스타일을 미리 볼 수 있나요?',
        a: '각 선생님의 샘플 강의와 커리큘럼 미리보기를 제공하고 있습니다. 또한 수강평을 통해 다른 수강생들의 후기도 확인하실 수 있습니다.',
      },
    ],
  },
  {
    id: 2,
    icon: <School />,
    title: '수강 관련',
    items: [
      {
        q: '수강 기간은 얼마인가요?',
        a: '각 강좌별로 설정된 수강 기간이 다르며, 보통 6개월에서 평생 소장이 가능합니다. 각 강좌 상세 페이지에서 확인하실 수 있습니다.',
      },
      {
        q: '수강 시작 전 필요한 준비사항이 있나요?',
        a: "강좌별로 요구되는 사전 지식이나 준비사항이 다릅니다. 각 강좌 소개에 명시된 '수강 전 필요 지식'을 확인해주세요.",
      },
    ],
  },
  {
    id: 3,
    icon: <Payment />,
    title: '결제 및 환불',
    items: [
      {
        q: '수강료 결제는 어떻게 하나요?',
        a: '신용카드, 무통장입금, 카카오페이 등 다양한 결제 수단을 제공합니다. 일시불 외에도 할부 결제가 가능합니다.',
      },
      {
        q: '환불 정책은 어떻게 되나요?',
        a: '수강 시작 후 7일 이내에는 전액 환불이 가능합니다. 이후에는 수강 진도율에 따라 환불 금액이 차등 적용됩니다.',
      },
    ],
  },
]

function FAQ() {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
      <Container maxWidth="lg">
        <FAQHeader />

        {faqDatas.map((faq) => (
          <FAQList faq={faq} />
        ))}

        <FAQAddQuestion />
      </Container>
    </Box>
  )
}

export default FAQ

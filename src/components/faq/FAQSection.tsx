import {
  ChatBubbleOutline,
  ExpandMore,
  Payment,
  Person,
  School,
} from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { useState } from 'react'

// FAQ 데이터
const faqData = {
  teacher: {
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
  course: {
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
  payment: {
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
}

function FAQSection() {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom textAlign="center">
          자주 묻는 질문
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Creation Academy에 대해 궁금하신 점을 확인해보세요
        </Typography>

        {Object.entries(faqData).map(([category, { icon, title, items }]) => (
          <Box key={category} sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              {icon}
              <Typography variant="h6" sx={{ ml: 1 }}>
                {title}
              </Typography>
            </Box>
            {items.map((item, index) => (
              <Accordion
                key={`${category}-${index}`}
                expanded={expanded === `${category}-${index}`}
                onChange={handleChange(`${category}-${index}`)}
                sx={{
                  mb: 1,
                  '&:before': { display: 'none' },
                  boxShadow: 'none',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:first-of-type': {
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                  },
                  '&:last-of-type': {
                    borderBottomLeftRadius: '4px',
                    borderBottomRightRadius: '4px',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.02)',
                    },
                  }}
                >
                  <Typography sx={{ fontWeight: 'medium' }}>
                    {item.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{item.a}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}

        {/* 추가 문의사항 안내 */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            bgcolor: 'white',
            borderRadius: 2,
            textAlign: 'center',
            boxShadow: 1,
          }}
        >
          <Typography variant="h6" gutterBottom>
            더 궁금하신 점이 있으신가요?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Creation Academy 고객센터가 친절히 답변해드리겠습니다.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" startIcon={<ChatBubbleOutline />}>
                1:1 문의하기
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" startIcon={<Person />}>
                선생님 지원하기
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default FAQSection

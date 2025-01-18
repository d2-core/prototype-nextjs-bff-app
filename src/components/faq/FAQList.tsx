import { Faq } from '@/models/faq'
import { ExpandMore } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import { useState } from 'react'

interface Props {
  faq: Faq
}
function FAQList({ faq }: Props) {
  const { id, icon, title, items } = faq
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }
  return (
    <Box key={id} sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {icon}
        <Typography variant="h6" sx={{ ml: 1 }}>
          {title}
        </Typography>
      </Box>
      {items.map((item, index) => (
        <Accordion
          key={`${id}-${index}`}
          expanded={expanded === `${id}-${index}`}
          onChange={handleChange(`${id}-${index}`)}
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
            <Typography sx={{ fontWeight: 'medium' }}>{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{item.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}

export default FAQList

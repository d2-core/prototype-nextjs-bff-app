import { Box, Typography } from '@mui/material'
import ScrollControl from '../shared/ScrollControl'
import { Teacher } from '@/models/teacher'
import TeacherCard from './TeacherCard'
import Spacing from '../shared/Spacing'

interface Props {
  title: string
  teachers: Teacher[]
  scrollRef: React.RefObject<HTMLDivElement>
  onScroll: (direction: 'left' | 'right') => void
}

function TeacherSideList({ title, teachers, scrollRef, onScroll }: Props) {
  return (
    <Box sx={{ mb: 6 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <ScrollControl
          onLeft={() => onScroll('left')}
          onRight={() => onScroll('right')}
        />
      </Box>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          pb: 2,
        }}
      >
        {teachers.map((teacher) => (
          <Box display={'flex'}>
            <TeacherCard key={teacher.id} teacher={teacher} width="300px" />
            <Spacing direction="horizontal" />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default TeacherSideList

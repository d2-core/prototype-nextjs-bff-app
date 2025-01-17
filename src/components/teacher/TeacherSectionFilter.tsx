import { Box, Chip, Stack } from '@mui/material'

const categorys: string[] = ['개발', '미디어', '마인드셋 & 비즈니스']

function TeacherSectionFilter() {
  return (
    <Box
      display={'flex'}
      gap={1}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ mb: 4 }}
    >
      {categorys.map((category) => (
        <Chip
          key={category}
          label={category}
          onClick={() => {}}
          variant={category === '전체' ? 'filled' : 'outlined'}
        />
      ))}
    </Box>
  )
}

export default TeacherSectionFilter

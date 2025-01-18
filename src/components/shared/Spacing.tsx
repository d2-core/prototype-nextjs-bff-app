import { Divider } from '@mui/material'

interface Props {
  size?: number
  direction?: 'horizontal' | 'vertical'
}

function Spacing({ size = 16, direction = 'vertical' }: Props) {
  return (
    <Divider
      sx={{
        backgroundColor: 'transparent',
        margin: direction === 'vertical' ? `${size}px 0` : `0 ${size}px`,
        border: 'none',
      }}
    />
  )
}

export default Spacing

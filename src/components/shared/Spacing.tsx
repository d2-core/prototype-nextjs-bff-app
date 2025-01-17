import { Divider } from '@mui/material'

interface Props {
  size?: number
  direction?: 'horizontal' | 'vertical'
}

function Spacing({ size = 16, direction = 'vertical' }: Props) {
  return (
    <Divider
      orientation={direction}
      sx={{
        backgroundColor: 'transparent',
        margin: direction === 'vertical' ? `${size}px 0` : `0 ${size}px`,
        border: 'none',
        width: direction === 'horizontal' ? '100%' : 'auto',
        height: direction === 'vertical' ? '100%' : 'auto',
      }}
    />
  )
}

export default Spacing

import { Box } from '@mui/material'

interface Props {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel({ children, index, value, ...rest }: Props) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`alarm-tabpanel-${index}`}
      aria-labelledby={`alarm-tab-${index}`}
      {...rest}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  )
}

export default TabPanel

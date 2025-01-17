import AppIntroduce from '@/components/introdution/AppIntrodution'
import TopNav from '@/components/shared/TopNav'
import { Box } from '@mui/material'

function Home() {
  return (
    <Box>
      <TopNav />
      <AppIntroduce />
    </Box>
  )
}

export default Home

import { CssBaseline } from '@mui/material'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  )
}

export default Layout

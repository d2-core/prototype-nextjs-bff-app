import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useUser from '@/hooks/useUser'
import { useLoginModalContext } from '@/contexts/LoginModalContext'

function isMyPath(path: string): boolean {
  return path.startsWith('/my')
}

function withAuthGuard(Component: React.ComponentType) {
  const AuthenticatedComponent = (props: any) => {
    const { user } = useUser()
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
    const { open } = useLoginModalContext()

    useEffect(() => {
      if (isMyPath(router.pathname) && user == null) {
        setIsAuthenticated(false)
        router.push('/')
        open()
      } else {
        setIsAuthenticated(true)
      }
    }, [router, user, open])

    if (isAuthenticated === null) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <p>Loading...</p>
        </div>
      )
    }

    if (isAuthenticated) {
      return <Component {...props} />
    }

    return null
  }

  return AuthenticatedComponent
}

export default withAuthGuard

import Button from '@/components/shared/Button'
import useUser from '@/hooks/auth/useUser'
import { use, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ro } from 'date-fns/locale'

function Home() {
  const user = useUser()
  const router = useRouter()
  const handle = () => {
    router.push('/auth')
  }
  useEffect(() => {
    if (user) {
      console.log('ddd', user.email)
    } else {
    }
    console.log('ddd', user)
  }, [user])

  return <Button onClick={handle}>BUtton</Button>
}

export default Home

import Button from '@/components/shared/Button'
import useUser from '@/hooks/auth/useUser'
import { use, useEffect } from 'react'

function Home() {
  const user = useUser()
  useEffect(() => {
    if (user) {
      console.log(user.id)
    } else {
      console.log('HELLO')
    }
  }, [])

  return <div>Home</div>
}

export default Home

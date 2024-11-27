import React from 'react'

function PrivateRoute({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

export default PrivateRoute

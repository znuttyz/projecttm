import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <div>You can't see this!</div>
    <div>
      You're not authenticated yet. Maybe you want to <Link href='/admin/auth/sign-in'><div>sign in</div></Link> and see what happens?
    </div>
  </div>
)

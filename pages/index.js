import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
        <h1>Home page</h1>
        <Link href='/faq'>
           FAQ
        </Link>
    </div>
  )
}

export default HomePage
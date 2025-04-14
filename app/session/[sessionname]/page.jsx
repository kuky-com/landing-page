'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const SessionRedirectPage = () => {
  const router = useRouter()

  useEffect(() => {
    // You can also use window.location.replace if you want to avoid back button behavior
    window.location.href = 'https://app.kuky.com'
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-medium text-gray-700">Redirecting...</p>
    </div>
  )
}

export default SessionRedirectPage

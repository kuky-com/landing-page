'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PrivacyPolicyPage() {
    const router = useRouter()

    useEffect(() => {
        router.push('/?privacy-policy=true')
    }, [router])

    return null
}
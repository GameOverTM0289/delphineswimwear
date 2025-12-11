'use client'

import { useEffect, useState } from 'react'
import CartDrawer from './CartDrawer'

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <>
      {children}
      {isHydrated && <CartDrawer />}
    </>
  )
}

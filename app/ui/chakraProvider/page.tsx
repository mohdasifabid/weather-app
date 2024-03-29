'use client'

import { ChakraProvider } from '@chakra-ui/react'

export function Chakra_Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}
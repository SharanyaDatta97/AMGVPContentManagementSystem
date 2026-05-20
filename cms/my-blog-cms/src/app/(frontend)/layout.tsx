import React from 'react'
import './styles.css'

export const metadata = {
  description: 'Payload CMS for AMG blog',
  title: 'AMG Blog CMS',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BrickedUp Masonry | Expert Brick & Stone Work',
  description: 'Professional masonry services including brickwork, stonework, chimney repair, patios, and foundation repair. Quality craftsmanship you can trust.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

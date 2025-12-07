import './globals.css'

export const metadata = {
  title: 'RediHome | Built Better. Built Faster. Built for You.',
  description: 'Quality homes for Birmingham\'s working families. 0% down, no PMI, and keys in 8 weeks. Affordable homeownership made simple.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Fraunces:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

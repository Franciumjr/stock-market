import React from 'react'
import Header from '@/components/Header';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='min-h-screen'>
        <div className='container py-10'>
            <Header></Header>
            {children}
        </div>
    </main>

  )
}

export default layout
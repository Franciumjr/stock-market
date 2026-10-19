import React from 'react'
import Header from '@/components/Header';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='min-h-screen flex flex-col bg-gray-900'>
      <Header />
      <div className='container py-8 flex-1'>
        {children}
      </div>
    </main>
  )
}

export default layout
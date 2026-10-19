import Link  from 'next/link'
import React from 'react'
import { Star } from 'lucide-react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const stars = [1, 2, 3, 4, 5]
  return (
    <main className="auth-layout">
      <section className='auth-left-section scrollbar-hide-default'>
        <Link href="/" className="auth-logo text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <span className="text-yellow-400">FlinderTrade</span>
        </Link>
        <div className="flex-1 flex flex-col justify-center">
          {children}
        </div>
      </section>
      <section className='auth-right-section'>
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className='auth-blockquote'>
            &ldquo;FlinderTrade makes real-time stock market analysis effortless and lightning fast.&rdquo;
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <cite className="auth-testimonial-author">- James B.</cite>
              <p className="text-sm text-gray-500">Crypto & Equity Investor</p>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-3">
            {stars.map((star) => (
              <Star key={star} strokeWidth={0} fill='#FDD458' className="h-5 w-5 text-yellow-400" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default layout
import { Button } from '@/components/ui/button'
import React from 'react'
import TradeWidget from '@/components/TradeWidget'
import { MARKET_OVERVIEW_WIDGET_CONFIG, STOCK_HEATMAP_CONFIG, TIMELINE_CONFIG } from '@/lib/constants'

const Home = () => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`

  return (
    <div className='flex min-h-screen home-wrapper'>
      <section className="grid-cols-2 w-full gap-8">
        <div className="md:col-span xl:col-span-2">
          <TradeWidget
            title='Market Overview'
            scriptUrl={`${scriptUrl}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className='custom-chart'
          />
        </div>
        <div className="md:col-span xl:col-span-2">
          <TradeWidget
            title='Stock Heatmap'
            scriptUrl={`${scriptUrl}stock-heatmap.js`}
            config={STOCK_HEATMAP_CONFIG}
            className='custom-chart'
          />
        </div>
        <div className="md:col-span xl:col-span-2">
          <TradeWidget
            scriptUrl={`${scriptUrl}timeline.js`}
            config={TIMELINE_CONFIG}
            className='custom-chart'
            height={600}
          />
        </div>
      </section>

    </div>
  )
}

export default Home
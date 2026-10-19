import { Button } from '@/components/ui/button'
import React from 'react'
import TradeWidget from '@/components/TradeWidget'
import { MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, HEATMAP_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from '@/lib/constants'

const Home = () => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`

  return (
    <div className='home-wrapper py-4'>
      <section className="home-section">
        <div className="col-span-1 md:col-span-2 xl:col-span-2">
          <TradeWidget
            title='Market Overview'
            scriptUrl={`${scriptUrl}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className='custom-chart'
          />
        </div>
        <div className="col-span-1 md:col-span-2 xl:col-span-1">
          <TradeWidget
            title='Stock Heatmap'
            scriptUrl={`${scriptUrl}stock-heatmap.js`}
            config={HEATMAP_WIDGET_CONFIG}
            className='custom-chart'
          />
        </div>
        <div className="col-span-1 md:col-span-2 xl:col-span-1">
          <TradeWidget
            scriptUrl={`${scriptUrl}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            className='custom-chart'
            height={600}
          />
        </div>
        <div className="col-span-1 md:col-span-2 xl:col-span-2">
          <TradeWidget
            scriptUrl={`${scriptUrl}market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            className='custom-chart'
            height={600}
          />
        </div>
      </section>
    </div>
  )
}


export default Home
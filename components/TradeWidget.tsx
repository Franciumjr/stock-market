"use client"

import React, { memo } from 'react';
import useTradingWidget from '@/hooks/useTradingWidget';

interface TradingViewWidgetProps {
  title?: string;
  scriptUrl?: string;
  config?: Record<string, unknown>;
  height?: number; 
  className?: string;
}

function TradingViewWidget({
  title, 
  scriptUrl = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js', 
  config = {}, 
  height = 600, 
  className = ''
}: TradingViewWidgetProps) {
  const containerRef = useTradingWidget(scriptUrl, config, height);

  return (
    <>
    <h1 className='font-semibold text-4xl gap-8'>{title}</h1>
    <div 
      className={`tradingview-widget-container ${className}`.trim()} 
      ref={containerRef} 
      style={{ height: `${height}px`, width: "100%" }}
    >
   
    </div>
    </>
  );
}

export default memo(TradingViewWidget);

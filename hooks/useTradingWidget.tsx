"use client"

import { useRef, useEffect } from 'react';

const useTradingWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height: number = 600
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const configString = JSON.stringify(config);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear container to prevent duplicate widgets on re-render
    container.innerHTML = '';

    // Create widget container child element required by TradingView embed scripts
    const widgetChild = document.createElement('div');
    widgetChild.className = 'tradingview-widget-container__widget';
    widgetChild.style.width = '100%';
    widgetChild.style.height = `${height}px`;
    container.appendChild(widgetChild);

    // Create script tag with TradingView widget configuration
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = configString;

    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [scriptUrl, configString, height]);

  return containerRef;
};

export default useTradingWidget;
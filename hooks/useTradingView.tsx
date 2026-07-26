'use client'

import { useEffect, useRef, useState } from "react";

const useTradingView = (scriptUrl: string, config: Record<string, unknown>, height: 600) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(
    () => {
      if (!containerRef.current) return;
      if (containerRef.current.dataset.loaded) return;

      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.innerHTML = JSON.stringify(config);

      // Watch for TradingView's iframe injection to know when the widget is ready
      const observer = new MutationObserver(() => {
        if (containerRef.current?.querySelector('iframe')) {
          setIsLoaded(true);
          observer.disconnect();
        }
      });

      observer.observe(containerRef.current, { childList: true, subtree: true });

      containerRef.current.appendChild(script);
      containerRef.current.dataset.loaded = 'true';

      return () => {
        observer.disconnect();
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
          delete containerRef.current.dataset.loaded;
        }
        setIsLoaded(false);
      }
    }, [scriptUrl, config, height])

  return { containerRef, isLoaded };
}

export default useTradingView;
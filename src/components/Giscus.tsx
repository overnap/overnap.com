import { useLayoutEffect, useRef } from 'react'

interface Props {
  theme?: string
}

const Giscus = ({ theme = 'light' }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const script = document.createElement('script')
    const attributes = {
      // from giscus.app script gen TODO: edit in gatsby config?
      src: 'https://giscus.app/client.js',
      'data-repo': 'overnap/overnap.com',
      'data-repo-id': 'R_kgDOGuL2cw',
      'data-category': 'Comments',
      'data-category-id': 'DIC_kwDOGuL2c84CcHs6',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-theme': theme,
      'data-lang': 'en',
      'data-loading': 'lazy',
      crossOrigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value)
    })

    containerRef.current?.appendChild(script)
  }, [])

  return <div ref={containerRef} className="giscus" />
}

export default Giscus

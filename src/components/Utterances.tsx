import { graphql, useStaticQuery } from "gatsby"
import { useLayoutEffect, useRef } from "react"
import { UtterancesQuery } from "../graphqlTypes"

interface Props {
  theme: string
}

const Utterances = ({ theme }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const data = useStaticQuery<UtterancesQuery>(graphql`
    query utterances {
      site {
        siteMetadata {
          repository
        }
      }
    }
  `)

  if (!data.site?.siteMetadata?.repository) {
    return (<div>Error!</div>)
  }

  useLayoutEffect(() => {
    const script = document.createElement('script')
    const attributes = {
      theme,
      src: 'https://utteranc.es/client.js',
      'repo': data.site!.siteMetadata!.repository!,
      'issue-term': 'pathname',
      label: 'comment',
      crossOrigin: 'anonymous',
      async: 'true'
    }
    
    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value)
    })

    containerRef.current?.appendChild(script)
  }, [])

  return (
    <div ref={containerRef} />
  )
}

export default Utterances

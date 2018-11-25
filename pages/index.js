import Head from 'next/head'
import React from 'react'
import { Button } from 'semantic-ui-react'

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
    </Head>
    <div>
      <h1>Hello world</h1>
      <p>scoped!</p>
      <Button secondary>Click Here</Button>
    </div>
    <style jsx>{`
      p {
        color: blue;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
  </div>
)

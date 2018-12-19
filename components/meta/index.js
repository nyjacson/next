// @flow

import React from 'react';
import Head from 'next/head';

export default function Meta({ headTitle }: any) {
  return (
    <Head>
      <title>{headTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/css/reset.css" />
      <link rel="stylesheet" href="/static/css/styles.css" />
    </Head>
  );
}

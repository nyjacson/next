import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import COMMON from '../../constants/common';
import styles from './header.scss';

export default function Header(props) {
  return (
    <div>
      <Head>
        <title>{props.headTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/static/css/semantic.css"></link>
        <link rel="stylesheet" href="/static/css/styles.css"></link>
      </Head>
      <header class={styles.headerWrapper}>
        <div class="ui container py-3">
        <Link href={{ pathname: '/'}}><a>Logo</a></Link>
        </div>
      </header>
    </div>
  )
}

Header.defaultProps = {
  headTitle: 'COMMON.HPName'
}

// @flow

import React from 'react';
import Link from 'next/link';
import styles from './readMore.scss';

type Props = {
  pathname: string,
  query?: {
    id: string
  },
  linkText?: string,
  textWhite?: boolean
};

export default function ReadMore(props: Props) {
  return (
    // Example: href={{ pathname: 'post', query: { id: p.id } }}
    <Link href={{ pathname: props.pathname, query: { id: props.query.id } }}>
      <a href className={`${styles.link} ${props.textWhite ? styles.textWhite : ''}`}>
        <span className={styles.bar} />
        {props.linkText}
      </a>
    </Link>
  );
}

ReadMore.defaultProps = {
  linkText: 'もっと読む',
  query: {
    id: ''
  },
  textWhite: false
};

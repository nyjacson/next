// @flow

import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';
import styles from './postsList.scss';

type Props = {
  posts: Array<any>
};

export function PostsList(props: Props) {
  const list = props.posts.map(p => (
    <div key={p.id} className={`p-3 border ${styles.wrapper}`}>
      <div>{ReactHtmlParser(p.id)}</div>
      <div>{ReactHtmlParser(p.title)}</div>
      <div>
        {ReactHtmlParser(p.excerpt)}
        <Link href={{ pathname: 'post', query: { id: p.id } }}>
          <a href className={styles.link}>
            <span className={styles.bar} />
            もっと読む
          </a>
        </Link>
      </div>
    </div>
  ));
  return <div>{list}</div>;
}

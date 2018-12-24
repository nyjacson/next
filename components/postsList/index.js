// @flow

import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ReadMore from '../readMore';
import styles from './postsList.scss';

type Props = {
  posts: Array<any>
};

export function PostsList(props: Props) {
  const list = props.posts.map(p => (
    <div key={p.id} className={`${styles.wrapper}`}>
      <div>{ReactHtmlParser(p.id)}</div>
      <div>{ReactHtmlParser(p.title)}</div>
      <div>
        {ReactHtmlParser(p.excerpt)}
        <ReadMore pathname="post" query={{ id: p.id }} />
      </div>
    </div>
  ));
  return <div>{list}</div>;
}

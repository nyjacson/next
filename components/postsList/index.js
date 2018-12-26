// @flow

import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { withSize } from 'react-sizeme';
import { getMqType } from '../../utils/layoutControl';
import ReadMore from '../readMore';
import styles from './postsList.scss';

type Props = {
  posts: Array<any>,
  categories: Array<any>,
  size: {
    width: ?number,
    height: ?number
  }
};

const getCategories = (catId, categories) => {
  const cat = categories.find(cat => cat.id === catId[0]);
  return cat ? cat.name : catId;
};

export function PostsList(props: Props) {
  const contentsMqType = getMqType(props.size);
  console.log('mq', contentsMqType);
  const respStyle = contentsMqType === 'SP' ? styles.SP : contentsMqType === 'TL' ? styles.TL : styles.PC;
  const list = props.posts.map(p => (
    <div key={p.id} className={styles.postItem}>
      <div className={styles.img} />
      <div className={styles.cat}>{getCategories(p.categories, props.categories)}</div>
      <div className={styles.title}>{ReactHtmlParser(p.title)}</div>
      <div className={styles.excerpt}>{ReactHtmlParser(p.excerpt)}</div>
      <div>
        <ReadMore pathname="post" query={{ id: p.id }} />
      </div>
    </div>
  ));
  return <div className={`${styles.wrapper} ${respStyle}`}>{list}</div>;
}

export default withSize()(PostsList);

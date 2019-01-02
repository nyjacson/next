// @flow

import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { withSize } from 'react-sizeme';
import Link from 'next/link';
import { getMqType } from '../../utils/layoutControl';
import styles from './postsList.scss';

type Props = {
  posts: Array<any>,
  categories: Array<any>,
  size: {
    width: ?number,
    height: ?number
  }
};

type State = {
  imgHeight: number
};

const getCategories = (catId, categories) => {
  const cat = categories.length > 0 ? categories.find(cat => cat.id === catId[0]) : null;
  return cat ? cat.name : catId;
};

export class PostsList extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {
      imgHeight: 200
    };
  }

  componentDidMount() {
    this.heightControl();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.size.width !== this.props.size.width) {
      setTimeout(() => {
        this.heightControl();
      }, 10);
    }
  }

  heightControl = () => {
    const { clientWidth } = this.imgRef.current;
    this.setState({
      imgHeight: (clientWidth / 4) * 3
    });
  };

  render() {
    const contentsMqType = getMqType(this.props.size);
    const respStyle = contentsMqType === 'SP' ? styles.SP : contentsMqType === 'TL' ? styles.TL : styles.PC;
    const list = this.props.posts.map(p => (
      <div key={p.id} className={styles.postItem}>
        <div className={styles.img} style={{ height: this.state.imgHeight }} ref={this.imgRef} />
        <Link href={{ pathname: 'post', query: { id: p.id } }}>
          <a href>
            <div className={styles.title}>{ReactHtmlParser(p.title)}</div>
            <div className={styles.excerpt}>{ReactHtmlParser(p.excerpt)}</div>
          </a>
        </Link>
        <div className={styles.cat}>{getCategories(p.categories, this.props.categories)}</div>
      </div>
    ));
    return <div className={`${styles.wrapper} ${respStyle}`}>{list}</div>;
  }
}

export default withSize()(PostsList);

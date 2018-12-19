// @flow

import React from 'react';
import axios from 'axios';
import ReadMore from '../components/readMore';
import styles from './index.scss';
import API from '../constants/api';
import { PostsList } from '../util/postsList';

type Props = {};

type State = {
  posts: Array<any>
};

export default class Top extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: null
        }
      ]
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    let posts = [];
    axios
      .get(API.posts)
      .then(res => {
        posts = res.data.map(r => {
          return {
            id: r.id,
            title: r.title.rendered,
            content: r.content.rendered,
            excerpt: r.excerpt.rendered,
            date: r.date,
            modified: r.modified,
            categories: r.categories
          };
        });
      })
      .then(() => {
        this.setState({
          posts
        });
      })
      .catch(error => console.log('error:', error));
  };

  render() {
    return (
      <div>
        <div className={`titleContentsPadding ${styles.topMain}`}>
          <h1 className={styles.h1}>
            Create your brands
            <br />
            for your business.
          </h1>
          <h2 className={styles.subTitle}>
            我々はホームページ制作会社です。
            <br />
            あなたのビジネスをブランディングする為の
            <br />
            デザインを、一緒に作り上げましょう。
          </h2>
        </div>
        <div className="flex-50">
          <div className={styles.contentsLeft}>
            <p className={styles.subText}>WHAT WE THINK</p>
            <h2 className={`${styles.subText} ${styles.h2}`}>ホームページとブランディング</h2>
            <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
            <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
            <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
            <ReadMore pathname="post" textWhite />
          </div>
          <div className={styles.contentsRight}>
            <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
          </div>
          <div />
        </div>
        <div className={styles.serviceContents}>
          <p className={styles.subText}>WHAT WE DO</p>
          <h2 className={`${styles.itemText} ${styles.h2}`}>我々が提供できるサービス</h2>
          <div className={`flex-50 ${styles.serviceItemWrapper}`}>
            <div className={styles.serviceItem}>
              <p className={styles.serviceItemTitle}>UI / UXコンサルティング</p>
              <p>デザインコンセプトの作成</p>
              <p>ユーザー要件の調査・定義</p>
              <p>UI/UX改善提案等</p>
            </div>
            <div className={styles.serviceItem}>
              <p className={styles.serviceItemTitle}>デザイン</p>
              <p>ロゴ制作</p>
              <p>名刺・印刷物のデザイン</p>
              <p>ホームページデザイン</p>
            </div>
            <div className={styles.serviceItem}>
              <p className={styles.serviceItemTitle}>ホームページ開発</p>
              <p>Wordpressテーマの制作</p>
              <p>ECサイト、SPAサイトの制作</p>
              <p>HTML/CSS/JSコーディング</p>
            </div>
          </div>
        </div>
        <div className="flex-50">
          <div className={styles.contentsLeft2} />
          <div className={styles.contentsRight2}>
            <p className={styles.subText}>BEST PRACTICE</p>
            <h2 className={`${styles.subText} ${styles.h2}`}>ホームページ作成の事前準備</h2>
            <p>
              効率よくホームページを作るために、事前に準備シておくべきことがあります。まずは、あなたが伝えたいことを整理しましょう。そして、ページ構成を考えましょう。
            </p>
            <p>
              サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。
            </p>
            <ReadMore pathname="post" />
          </div>
          <div />
        </div>
        <div>{this.state.posts[0].id !== null ? <PostsList posts={this.state.posts} /> : 'コンテンツがありません'}</div>
        <div className={styles.contact}>
          <p className={styles.subText}>LET’S THINK TOGETHER</p>
          <h2 className={`${styles.subText} ${styles.h2}`}>
            費用対効果の高く、美しいホームページで
            <br />
            あなたのビジネスを成長させましょう。
            <br />
            まずはご相談ください。
          </h2>
          <a href>
            <button type="button" className={styles.button}>
              <span>お問い合わせフォームへ</span>
              <img className={styles.iconPlane} src="static/img/plane.svg" alt="planeIcon" />
            </button>
          </a>
        </div>
      </div>
    );
  }
}

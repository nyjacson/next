// @flow

import React from 'react';
import ReadMore from '../components/readMore';
import styles from './index.scss';
import { getPosts } from '../util/postsControl';
import { PostsList } from '../components/postsList';

type Props = {};

type State = {
  posts: Array<any>,
  onHover: boolean,
  contactHeight: number
};

export default class Top extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
    this.state = {
      posts: [
        {
          id: null
        }
      ],
      onHover: false,
      contactHeight: 0
    };
  }

  componentDidMount() {
    // for contact section
    this.getHeight();
    // for getting all posts
    getPosts(posts => {
      this.setState({
        posts
      });
    });
  }

  getHeight = () => {
    const { clientHeight } = this.contactRef.current;
    this.setState({
      contactHeight: clientHeight
    });
  };

  handleHoverOn = () => {
    this.setState({
      onHover: true
    });
  };

  handleHoverOff = () => {
    this.setState({
      onHover: false
    });
  };

  render() {
    return (
      <div style={{ marginBottom: this.state.contactHeight }}>
        <div className={styles.topWrapper}>
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
          <div className={styles.blogs}>
            {this.state.posts[0].id !== null ? <PostsList posts={this.state.posts} /> : 'コンテンツがありません'}
          </div>
        </div>
        <div className={styles.contact} ref={this.contactRef}>
          <p className={styles.subText}>LET’S THINK TOGETHER</p>
          <h2 className={`${styles.subText} ${styles.h2}`}>
            費用対効果の高く、美しいホームページで
            <br />
            あなたのビジネスを成長させましょう。
            <br />
            まずはご相談ください。
          </h2>
          <a href>
            <button
              type="button"
              className={`${styles.button} ${this.state.onHover ? styles.onHover : ''}`}
              onMouseEnter={this.handleHoverOn}
              onMouseLeave={this.handleHoverOff}
            >
              <span>お問い合わせフォームへ</span>
              <img className={styles.iconPlane} src="static/img/plane.svg" alt="planeIcon" />
            </button>
          </a>
        </div>
      </div>
    );
  }
}

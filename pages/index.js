// @flow

import React from 'react';
import { connect } from 'react-redux';
import ReadMore from '../components/readMore';
import { Button } from '../components/button';
import MoveLoading from '../components/svg/moveLoading';
import styles from './css/index.scss';
import PostsList from '../components/postsList';
import Particle from '../components/particle';
import Canvas from '../components/canvas';
import { fetchCagetories, fetchPosts } from '../actions/wpControl';

type Props = {
  fetchCagetories: any,
  categories: Array<any>,
  fetchPosts: any,
  posts: Array<any>,
  postsTotal: number
};

type State = {
  posts: Array<any>,
  onHover: boolean,
  contactHeight: number,
  showTopImg: boolean
};

export class Top extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
    this.canvasRef = React.createRef();
    this.canvasWrapperRef = React.createRef();
    this.state = {
      contactHeight: 0,
      loadedPosts: 0,
      showTopImg: true
      // canvasWidth: 0,
      // canvasHeight: 0
    };
  }

  componentDidMount() {
    this.props.fetchPosts(3, 0);
    this.setState({
      loadedPosts: 3
    });
    this.props.fetchCagetories();
    this.getHeight();
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    if (window.top.pageYOffset > 2500) {
      // 2000 could be any
      this.setState({ showTopImg: false });
    } else if (this.state.showTopImg === false) {
      this.setState({ showTopImg: true });
    }
  };

  getHeight = () => {
    const { clientHeight } = this.contactRef.current;
    this.setState({
      contactHeight: clientHeight
    });
  };

  handleOnClickLoading = () => {
    const count = this.state.loadedPosts + 6;
    this.props.fetchPosts(count);
    this.setState({
      loadedPosts: count
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
              <p>ホームページを作成する目的は何でしょうか？</p>
              <p>
                もちろんビジネスの規模によって、目的は様々だと思います。例えば、有名な大企業であれば自社のサービスや、社会への貢献を紹介するものかもしれません。また、起業したばかりのスタートアップ企業であれば自社を知ってもらうための名刺代わりだったりするのではないでしょうか。
              </p>
              <p>
                ホームページは、お客様との最初のタッチポイントであり、お客様を伝えたい情報に適切に誘導し、分かりやすい表現で的確に伝えるという目的を持っています。
              </p>
              <p>
                我々は、例え数分程度の短い滞在時間のお客様に対しても高品質かつ、きめ細かなサービスで、御社様の企業イメージに合わせた最高のUX(ユーザー体験)をご提供出来るような、上質なホームページ(或いはECサイト)を作って行きたいと考えています。
              </p>
              <ReadMore pathname="post" textWhite />
            </div>
            <div className={styles.contentsRight} />
            <div />
          </div>
          <div className={styles.serviceContents}>
            <Particle />
            <p className={styles.subText}>WHAT WE DO</p>
            <h2 className={`${styles.itemText} ${styles.h2}`}>我々が提供できるサービス</h2>
            <div className={`flex-50 ${styles.serviceItemWrapper}`}>
              <div className={styles.serviceItem}>
                <div>
                  <img className={styles.iconUi} src="static/img/icon-ui.svg" alt="uiIcon" />
                </div>
                <p className={styles.serviceItemTitle}>UI / UXコンサルティング</p>
                <p>デザインコンセプトの作成</p>
                <p>ユーザー要件の調査・定義</p>
                <p>UI/UX改善提案等</p>
              </div>
              <div className={styles.serviceItem}>
                <div>
                  <img className={styles.iconDesign} src="static/img/icon-design.svg" alt="designIcon" />
                </div>
                <p className={styles.serviceItemTitle}>デザイン</p>
                <p>ロゴ制作</p>
                <p>名刺・印刷物のデザイン</p>
                <p>ホームページデザイン</p>
              </div>
              <div className={styles.serviceItem}>
                <div>
                  <img className={styles.iconWeb} src="static/img/icon-website.svg" alt="websiteIcon" />
                </div>
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
            <div className={styles.blogsTitleWrapper}>
              <p className={styles.subText}>NEW CONTENTS</p>
              <h2 className={`${styles.itemText} ${styles.h2}`}>最近の記事</h2>
            </div>
            {this.props.posts && this.props.posts.length > 0 ? (
              <div>
                <PostsList posts={this.props.posts} categories={this.props.categories} />
                {this.props.posts.length < this.props.postsTotal && (
                  <div className={styles.blogButtonWrapper}>
                    <Button
                      label="その他の記事も読む"
                      theme="secondary"
                      // imgSrc="static/img/icon-spinner.svg"
                      svgIcon={<MoveLoading />}
                      onClick={this.handleOnClickLoading}
                    />
                  </div>
                )}
              </div>
            ) : (
              'コンテンツがありません'
            )}
          </div>
        </div>
        {this.state.showTopImg && <Canvas />}
        <div className={styles.contact} ref={this.contactRef}>
          {!this.state.showTopImg && (
            <div>
              <p className={styles.subText}>LET’S THINK TOGETHER</p>
              <h2 className={`${styles.subText} ${styles.h2}`}>
                費用対効果の高く、美しいホームページで
                <br />
                あなたのビジネスを成長させましょう。
                <br />
                まずはご相談ください。
              </h2>
              <Button label="お問い合わせフォームへ" imgSrc="static/img/plane.svg" href="contact" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchCagetories: (perPage, offset) => {
      dispatch(fetchCagetories(perPage, offset));
    },
    fetchPosts: (perPage, offset) => {
      dispatch(fetchPosts(perPage, offset));
    }
  };
}

export function mapStateToProps(state: any /*  ownProps: Prop */) {
  return {
    categories: state.categories.data,
    posts: state.posts.data || null,
    postsTotal: state.posts.total
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);

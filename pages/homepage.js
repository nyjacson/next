// @flow

import React from 'react';
import styles from './css/homepage.scss';

type Props = {};

type State = {};

export default class Top extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.homepageWrapper}>
        <div className={`titleContentsPadding ${styles.topMain}`}>
          <h1 className={styles.mainText}>ホームページ作成の事前準備</h1>
          <p className={styles.subTitle}>
            効率よくプロジェクトを開始するため、最低限の知識をまとめました。
            <br />
            工数( = 費用)削減にも有効ですので、是非ご一読下さい。
          </p>
        </div>

        <div className={styles.design}>
          <div className={styles.section}>
            <h2 className={`${styles.h2}`}>設計</h2>
            <p className={styles.subText}>目標を設定する</p>
            <p>
              現在運用されているホームページ、または新規で作成するホームページに対してのコンサルティングを実施致します。
              <br />
              基本的な流れとしては、ホームページで実現したいことの確認と、ユーザー視点でのExperienceとのGapをどのように埋めていくのかをご提案させていただきます。
            </p>
            <p>
              予算に応じてDesign
              Systemの制作や、CSS・Designフレームワークの制作、ターゲットユーザー層に対してのユーザーテストの実施等、様々なアプローチから、ユーザー体験をより良いものに作り上げるサポートをさせていただきます。
            </p>
          </div>
          <div className={styles.section}>
            <p className={styles.subText}>構造を設計する</p>
            <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

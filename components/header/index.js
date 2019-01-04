// @flow

import React from 'react';
import Link from 'next/link';
import IconMenu from '../svg/iconMenu';
import Meta from '../meta';
import styles from './header.scss';

type Props = {
  headTitle: string,
  onClickMenu: Function,
  currentPath: string
};

type State = {
  onMenu: boolean
};

const bgGray = ['/homepage'];

export default class Header extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      onMenu: false
    };
  }

  onMouseEnter = () => {
    this.setState({
      onMenu: true
    });
  };

  onMouseLeave = () => {
    this.setState({
      onMenu: false
    });
  };

  backgroundStyle = () => {
    return bgGray.includes(this.props.currentPath) ? styles.bgGray : styles.bgNone;
  };

  render() {
    return (
      <div className={this.backgroundStyle()}>
        <Meta headTitle={this.props.headTitle || 'Well Being Creative'} />
        <header className={styles.headerWrapper}>
          <div className={styles.headerWrapper}>
            <div className={styles.headerInner}>
              <Link href={{ pathname: '/' }}>
                <a href className={styles.logo}>
                  Logo
                </a>
              </Link>
              <a
                href
                className={styles.menuArea}
                onClick={this.props.onClickMenu}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
              >
                <span>Menu</span>
                <IconMenu onHover={this.state.onMenu} />
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

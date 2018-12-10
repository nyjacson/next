// @flow

import React from 'react';
import Link from 'next/link';
import IconMenu from '../svg/iconMenu';
import Meta from '../meta';
import styles from './header.scss';

type Props = {
  headTitle: string,
  onClickMenu: Function
};

type State = {
  onMenu: boolean
};

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

  render() {
    return (
      <div>
        <Meta headTitle={this.props.headTitle || 'test'} />
        <header className={styles.headerWrapper}>
          <div className="ui container py-3">
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
                <span>MENU</span>
                <IconMenu onHover={this.state.onMenu} />
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

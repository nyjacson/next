// @flow
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import styles from './baseLayout.scss';

type Props = {
  headTitle: string,
  children: any
};
export default class BaseLayout extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      openSidebar: false
    };
  }

  onToggleSlider = () => {
    this.setState(({ openSidebar }) => ({ openSidebar: !openSidebar }));
  };

  render() {
    const { headTitle, children } = this.props;
    return (
      <div>
        <Header headTitle={headTitle} onClickMenu={this.onToggleSlider} />
        <div className={styles.mainWrapper}>{children}</div>
        <Footer />
        <Sidebar open={this.state.openSidebar} onToggleSlider={this.onToggleSlider} />
      </div>
    );
  }
}

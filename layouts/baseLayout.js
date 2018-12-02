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

  onToggleSidebar = () => {
    this.setState(prevState => {
      return { openSidebar: !prevState };
    });
    console.log('clicked');
  };

  render() {
    const { headTitle, children, ...rest } = this.props;
    const newChild = React.Children.map(children, child => {
      return React.cloneElement(child, {
        ...rest
      });
    });
    return (
      <div>
        <Header headTitle={headTitle} onClickMenu={this.onToggleSidebar} />
        <div className={styles.mainWrapper}>
          <div className="ui container py-4">{newChild}</div>
        </div>
        <Footer />
        {this.state.openSidebar && (
          <div>
            <a href className={styles.sidebarDim} onClick={this.onToggleSidebar}>
              &nbsp;
            </a>
            <Sidebar />
          </div>
        )}
      </div>
    );
  }
}

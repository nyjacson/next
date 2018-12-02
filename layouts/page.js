import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import styles from './page.scss';

export default class AppPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSidebar: false
    };
  }

  onToggleSidebar = () => {
    this.setState({
      openSidebar: !this.state.openSidebar
    });
    console.log('clicked');
  };

  render() {
    return (
      <div>
        <Header headTitle={this.props.headTitle} onClickMenu={this.onToggleSidebar} />
        <div className={styles.mainWrapper}>
          <div className="ui container py-4">{this.props.children}</div>
        </div>
        <Footer />
        {this.state.openSidebar && (
          <div>
            <div className={styles.sidebarDim} onClick={this.onToggleSidebar} />
            <Sidebar />
          </div>
        )}
      </div>
    );
  }
}

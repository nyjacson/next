import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from './page.scss';

export default ({ headTitle, children }) => (
  <div>
    <Header headTitle={headTitle} />
      <div class={styles.mainWrapper}>
        <div class="ui container">
          { children }
        </div>
      </div>
    <Footer />
  </div>
)
import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
export default ({ headTitle, children }) => (
  <div>
    <Header headTitle={headTitle} />
      <div class="ui container">
        { children }
      </div>
    <Footer />
  </div>
)
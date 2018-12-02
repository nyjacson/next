import React from 'react';
import App, { Container } from 'next/app';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    console.log('router', this.props.router.asPath);
    return (
      <Container>
        <div>
          <TransitionGroup>
            <CSSTransition key={router.asPath} timeout={500} classNames="fade">
              <Component {...pageProps} {...router} />
            </CSSTransition>
          </TransitionGroup>
        </div>
      </Container>
    );
  }
}

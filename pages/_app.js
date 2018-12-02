import React from 'react';
import App, { Container } from 'next/app';

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <Component {...pageProps} {...router} />
      </Container>
    );
  }
}

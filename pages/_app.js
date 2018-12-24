import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import withRedux from 'next-redux-wrapper';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import BaseLayout from '../layouts/baseLayout';

const initialState = {
  categories: {},
  posts: []
};

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'fetch_categories_success':
      return Object.assign({}, state, {
        categories: action.payload
      });
    case 'fetch_posts_success':
      return Object.assign({}, state, {
        posts: action.payload
      });
    default:
      return state;
  }
};

const makeStore = initialState => {
  return createStore(reducer, initialState, devToolsEnhancer({}));
};

export class MyApp extends App {
  render() {
    const { Component, pageProps, router, store } = this.props;
    console.log('router', this.props.router.asPath);
    return (
      <Container>
        <Provider store={store}>
          <BaseLayout>
            <TransitionGroup>
              <CSSTransition key={router.asPath} timeout={500} classNames="fade">
                <Component {...pageProps} {...router} />
              </CSSTransition>
            </TransitionGroup>
          </BaseLayout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);

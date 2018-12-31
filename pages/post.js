// @flow

import React from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import styles from './css/post.scss';
import API from '../constants/api';

type Props = {
  query: {
    id: string
  }
};

type State = {
  post: Object
};

export default class Post extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: null,
        title: null
      }
    };
  }

  componentDidMount() {
    this.getPost(this.props.query.id || 1);
  }

  getPost(id) {
    let post = {};
    axios
      .get(API.posts + id)
      .then(res => {
        post = {
          id: res.data.id,
          title: res.data.title.rendered,
          content: res.data.content.rendered,
          excerpt: res.data.excerpt.rendered
        };
        return post;
      })
      .then(() => {
        this.setState({
          post
        });
      })
      .catch(error => console.log('error:', error));
  }

  render() {
    return (
      <div className={styles.postWrapper}>
        <div className={`titleContentsPadding ${styles.topMain}`}>
          <h1 className={styles.mainText}>{this.state.post.title}</h1>
        </div>
        <div>
          <div key={this.state.post.id} className={styles.postSection}>
            <p>{ReactHtmlParser(this.state.post.id)}</p>
            <p>{ReactHtmlParser(this.state.post.title)}</p>
            <p>{ReactHtmlParser(this.state.post.content)}</p>
          </div>
        </div>
      </div>
    );
  }
}

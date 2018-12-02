// @flow

import React from 'react';
import axios from 'axios';
import API from '../constants/api';
import { PostsList } from '../util/postsList';

type Props = {};

type State = {
  posts: Array<any>
};

export default class Top extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: null
        }
      ]
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    let posts = [];
    axios
      .get(API.posts)
      .then(res => {
        posts = res.data.map(r => {
          return {
            id: r.id,
            title: r.title.rendered,
            content: r.content.rendered,
            excerpt: r.excerpt.rendered,
            date: r.date,
            modified: r.modified,
            categories: r.categories
          };
        });
      })
      .then(() => {
        this.setState({
          posts
        });
      })
      .catch(error => console.log('error:', error));
  };

  render() {
    return (
      <div>
        <h1>Post list</h1>
        <div>{this.state.posts[0].id !== null ? <PostsList posts={this.state.posts} /> : 'コンテンツがありません'}</div>
        <style jsx>
          {`
            @media (max-width: 600px) {
              p {
                font-size: 14px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

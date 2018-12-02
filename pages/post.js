// @flow

import React from 'react';
import axios from 'axios';
import BaseLayout from '../layouts/baseLayout';
import API from '../constants/api';
import { PostPage } from '../util/postPage';

type Props = {
  query: {
    id: string
  },
  pathname: string
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
      <BaseLayout headTitle="my-Page | post" pathname={this.props.pathname}>
        <div>
          <h1>{this.state.post.title}</h1>
          <div>
            <PostPage post={this.state.post} />
          </div>
        </div>
        <style jsx>
          {`
            @media (max-width: 600px) {
              p {
                font-size: 14px;
              }
            }
          `}
        </style>
      </BaseLayout>
    );
  }
}

// @flow

import React from 'react';
import axios from 'axios';
import API from '../constants/api';
import { PostPage } from '../util/postPage';

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
      <div className="ui container py-4">
        <div className="titleContentsPadding">
          <h1>{this.state.post.title}</h1>
        </div>
        <div>
          <PostPage post={this.state.post} />
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
      </div>
    );
  }
}

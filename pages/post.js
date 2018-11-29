import React from 'react'
import Page from '../layouts/page';
import axios from 'axios';
import API from '../constants/api';
import { PostPage } from '../util/postPage';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: null,
        title: null,     
      }
    }
  }

  componentDidMount() {
    this.getPost(this.props.url.query.id);
  }

  getPost = (id) => {
    let post = {};
    axios.get(API.posts + id)
      .then((res) => {
        console.log('res', res);
        return post = {
          id: res.data.id,
          title: res.data.title.rendered,
          content: res.data.content.rendered,
          excerpt: res.data.excerpt.rendered
        }
    }).then(() => {
      this.setState({
        post
      })
    })
    .catch(error => console.log('error:', error))
  }
  
  render() {
    return (
      <Page headTitle={'my-Page | post'}>
        <div>
          <h1>{this.state.post.title}</h1>
          <div>
            <PostPage post={this.state.post} />
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 600px) {
            p {
              font-size: 14px;
            }
          }
        `}</style>
      </Page>
    )
  }
}

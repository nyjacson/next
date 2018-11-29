import React from 'react'
import Page from '../layouts/page';
import axios from 'axios';
import { Button } from 'semantic-ui-react'
import API from '../constants/api';
import { PostsList } from '../util/postsList';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: null,
        title: null,
        content: null,
        excerpt: null        
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
          <h1>Post list</h1>
          <p>scoped!</p>
          <Button secondary onClick={() => this.getPost(this.props.url.query.id)}>Click Here</Button>
          <div>
            <p>fetch response</p>
            {/* <PostsList posts={this.state.posts} /> */}
            {this.state.post.id}
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

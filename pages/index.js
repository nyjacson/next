import React from 'react'
import Page from '../layouts/page';
import axios from 'axios';
import { Button } from 'semantic-ui-react'
import API from '../constants/api';
import { PostsList } from '../util/postsList';

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [{
        id: null,
        title: null,
        content: null,
        excerpt: null        
      }]
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    let posts = [];
    axios.get(API.posts)
      .then((res) => {
        console.log('res', res);
        posts = res.data.map(r => {
          return ({
            id: r.id,
            title: r.title.rendered,
            content: r.content.rendered,
            excerpt: r.excerpt.rendered
          })
        })
    }).then(() => {
      this.setState({
        posts
      })
    })
    .catch(error => console.log('error:', error))
  }
  
  render() {
    return (
      <Page headTitle={'my-Page'}>
        <div>
          <h1>Post list</h1>
          <p>scoped!</p>
          <Button secondary onClick={this.getPosts}>Click Here</Button>
          <div>
            <p>fetch response</p>
            {this.state.posts[0].id !== null ? <PostsList posts={this.state.posts} /> : 'コンテンツがありません' }
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

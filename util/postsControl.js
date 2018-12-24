// @flow
import axios from 'axios';
import APIs from '../constants/api';

export function getPosts(cb) {
  let posts = [];
  axios
    .get(APIs.posts)
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
      cb(posts);
    })
    .catch(error => console.log('error:', error));
}

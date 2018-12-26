// @flow
import axios from 'axios';
import APIs from '../constants/api';

export function fetchCagetories(per_page: ?number = 100, offset: ?number = 0) {
  return (dispatch: (action: Actions) => void) => {
    dispatch({ type: 'FETCH_CATEGORIES_BEGIN' });
    axios
      .get(APIs.categories, {
        params: {
          per_page,
          offset
        }
      })
      .then(res => {
        return res.data.map(r => {
          return {
            id: r.id,
            name: r.name,
            slug: r.slug,
            link: r.link,
            description: r.description
          };
        });
      })
      .then(categories => {
        dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', response: categories });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_CATEGORIES_ERROR', response: error });
      });
  };
}

export function fetchPosts(per_page: ?number = 100, offset: ?number = 0) {
  return (dispatch: (action: Actions) => void) => {
    dispatch({ type: 'FETCH_POSTS_BEGIN' });
    axios
      .get(APIs.posts, {
        params: {
          per_page,
          offset
        }
      })
      .then(res => {
        dispatch({ type: 'FETCH_POSTS_TOTAL', response: Number(res.headers['x-wp-total']) });
        return res.data.map(r => {
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
      .then(posts => {
        dispatch({ type: 'FETCH_POSTS_SUCCESS', response: posts });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_POSTS_ERROR', response: error });
      });
  };
}

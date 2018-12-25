// @flow
import axios from 'axios';
import APIs from '../constants/api';

export function fetchCagetories() {
  console.log('fetch cat called');
  return (dispatch: (action: Actions) => void) => {
    dispatch({ type: 'FETCH_CATEGORIES_BEGIN' });
    return axios
      .get(APIs.categories)
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
        console.log('fetch cat called2', categories);
        dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', response: categories });
      })
      .catch(error => {
        console.log('error:', error);
        dispatch({ type: 'FETCH_CATEGORIES_ERROR', response: error });
      });
  };
}

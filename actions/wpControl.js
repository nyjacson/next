// @flow
import axios from 'axios';
import APIs from '../constants/api';

export function fetchCagetories() {
  console.log('fetch cat called');
  return (dispatch: (action: Actions) => void) => {
    dispatch({ type: 'FETCH_CATEGORIES_BEGIN' });
    axios
      .get(APIs.categories)
      .then(res => {
        console.log('fetch2');
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
        console.log('fetch cat called3', categories);
        dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', response: categories });
      })
      .catch(error => {
        console.log('error:', error);
        dispatch({ type: 'FETCH_CATEGORIES_ERROR', response: error });
      });
  };
}

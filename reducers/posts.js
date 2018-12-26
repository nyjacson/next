// @flow
type ActionOrNothing = Actions | { type: '' };

const initialState = {
  data: {},
  errors: [],
  isFetching: false,
  total: 0
};

export default function reducer(state: State = initialState, action: ActionOrNothing = { type: '' }) {
  switch (action.type) {
    case 'FETCH_POSTS_BEGIN':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'FETCH_POSTS_SUCCESS':
      return Object.assign({}, state, {
        data: action.response,
        isFetching: false
      });
    case 'FETCH_POSTS_TOTAL':
      return Object.assign({}, state, {
        total: action.response
      });
    case 'FETCH_POSTS_ERROR':
      return Object.assign({}, state, {
        errors: action.response.errors,
        isFetching: false
      });
    default:
      return state;
  }
}

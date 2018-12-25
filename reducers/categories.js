// @flow
type ActionOrNothing = Actions | { type: '' };

const initialState = {
  data: {},
  errors: [],
  isFetching: false
};

export default function reducer(state: State = initialState, action: ActionOrNothing = { type: '' }) {
  switch (action.type) {
    case 'FETCH_CATEGORIES_BEGIN':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'FETCH_CATEGORIES_SUCCESS':
      return Object.assign({}, state, {
        data: action.response,
        isFetching: false
      });
    case 'FETCH_CATEGORIES_ERROR':
      return Object.assign({}, state, {
        errors: action.response.errors,
        isFetching: false
      });
    default:
      return state;
  }
}

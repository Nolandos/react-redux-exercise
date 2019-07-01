const initialState = {
  users: [],
  loading: false
}

export default function getUsers(state = initialState, action={}) {
    switch (action.type) {
      case 'SEARCH_USERS':
        return { ...state, users: action.users};
      case 'GET_DATA_REQUESTED':
        return {...state, loading: true, users:[]};
      case 'GET_DATA_DONE':
        return {...state, loading: false};
      default:
        return state;
      }
  };

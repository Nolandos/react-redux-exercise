//SELECTORS
export const getUserList = ({ users }) => users.users;
export const getLoading = ({users}) => users.loading;

//ACTIONS
export const search = (users) => ({type: 'SEARCH_USERS', users})
export const getDataRequested = () => ({type: 'GET_DATA_REQUESTED'});  
export const getDataDone = () => ({type: 'GET_DATA_DONE'});

//THUNKS
export const showUsers = () => {
    return async dispatch => {
      const searchText = 'Nolandos'; // tak na sztywno sobie można podać :)
      const url = `https://api.github.com/search/users?q=${searchText}`;
  
      dispatch(getDataRequested());
      
      try {
        await new Promise((resolve, reject) => setTimeout(resolve, 4000));
        let response = await fetch(url);
        response = await response.json();
        dispatch(getDataDone());
        dispatch(search(response.items)); 
      }
      catch {
        console.log('error')
      }
      
    } 
}

//INITIAL STATE
const initialState = {
    users: [],
    loading: false
}

//REDUCER
export default function users(state = initialState, action={}) {
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
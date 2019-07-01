export const search = (users) => ({type: 'SEARCH_USERS', users})
export const getDataRequested = () => ({type: 'GET_DATA_REQUESTED'});  
export const getDataDone = () => ({type: 'GET_DATA_DONE'});
   

/*THUNKS*/

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
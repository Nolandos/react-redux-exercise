import React from 'react';
import { connect } from 'react-redux';
import User from './components/User/User.jsx';

function search(users) {
  return {
      type: 'SEARCH_USERS',
      users
  }
}

function getDataRequested() {
  return {
    type: 'GET_DATA_REQUESTED'
  }
}

function getDataDone() {
  return {
    type: 'GET_DATA_DONE'
  }
}



function getUsers () {
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

class App extends React.Component {

render() {
  const { users, loading, searchUsers } = this.props;
    return (
      <div>
        <button onClick={searchUsers} >Pokaż użytkowników</button>
        <br></br>
        {loading === true && <img src="http://jammer.hu/wp-content/uploads/2014/12/Preloader_10.gif"></img>}
        <ul>{users.map(user => <User key={user.login} {...user} />)}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
        users: state.users,
        loading: state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUsers: () => dispatch(getUsers())
  }
};

export default App = connect(mapStateToProps, mapDispatchToProps)(App);






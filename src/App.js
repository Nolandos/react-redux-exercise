import React from 'react';
import { connect } from 'react-redux';
import User from './components/User/User.jsx';

function search(users) {
  return {
      type: 'SEARCH_USERS',
      users
  }
}

class App extends React.Component {

  getUsers = () => {
    const searchText = 'Nolandos'; // tak na sztywno sobie można podać :)
    const url = `https://api.github.com/search/users?q=${searchText}`;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => this.props.searchUsers(responseJson.items));
  }

render() {
  const { users } = this.props;
    return (
      <div>
        <button onClick={this.getUsers} >Pokaż użytkowników</button>
        <ul>{users.map(user => <User key={user.login} {...user} />)}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUsers: (users) => dispatch(search(users))
  }
};

export default App = connect(mapStateToProps, mapDispatchToProps)(App);






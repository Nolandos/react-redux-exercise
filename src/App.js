import React from 'react';
import { connect } from 'react-redux';
import User from './components/User/User.jsx';
import { showUsers } from "./actions";
import {getUserList, getLoading} from "./selectors/selectors";

class App extends React.Component {

render() {
  const { users, loading, showUsers } = this.props;

    return (
      <div>
        <button onClick={showUsers} >Pokaż użytkowników</button>
        <br></br>
        {loading === true && <img src="http://jammer.hu/wp-content/uploads/2014/12/Preloader_10.gif"></img>}
        {<ul>{users.map(user => <User key={user.login} {...user} />)}</ul>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      users: getUserList(state), //state.getUsers.users, w sumie też tak można... :D
      loading: getLoading(state),
    };
};

const mapDispatchToProps = { showUsers };

export default App = connect(mapStateToProps, mapDispatchToProps)(App);






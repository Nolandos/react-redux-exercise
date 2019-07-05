//REQUIRED IMPORTS
import React from 'react';
import { connect } from 'react-redux';
import './App.scss';

//IMPORT COMONENTS
import User from './components/User/User';
import Search from './components/Search/Search';

//IMPORT REDUX ELEMENTS
import { getUserList, getRequest } from './redux/usersRedux';

class App extends React.Component {

  render() {
    const { users, request } = this.props;

      return (
        <div className="app">
          <Search />
          <br></br>
          { request.pending === true && <img src="http://jammer.hu/wp-content/uploads/2014/12/Preloader_10.gif"></img> }
          { request.success === false && <h1>Rodzaj błędu: {request.error}</h1> }
          { request.success === true && <ul className="contact-list">{users.map(user => <User key={user.login} {...user} />)}</ul> }
        </div>
      );
    }
  }

const mapStateToProps = (state) => {
  return {
      users: getUserList(state), 
      request: getRequest(state),
    };
};

export default App = connect(mapStateToProps)(App);






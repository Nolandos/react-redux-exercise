//REQUIRED IMPORTS
import React from 'react';
import { connect } from 'react-redux';

//IMPORT REDUX ELEMENTS
import { showUsers, getSearchText, setSearchText } from '../../redux/usersRedux';

class Search extends React.Component { 
    
    handleChange = e => {
        const {setSearchText} = this.props;
        let searchingText = e.target.value;
        setSearchText(searchingText);
    }

    handleSubmit = e => {  
        e.preventDefault();
        const {searchText, showUsers } = this.props;
        showUsers(searchText);
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <label htmlFor="searchText">Search by user name</label>
                <input
                    type="text"
                    id="searchText"
                    placeholder="Search..."
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchText: getSearchText(state)
      };
  };

const mapDispatchToProps = { showUsers, setSearchText };

export default Search = connect(mapStateToProps, mapDispatchToProps)(Search);


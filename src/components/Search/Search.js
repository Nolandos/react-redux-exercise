//REQUIRED IMPORTS
import React from 'react';
import { connect } from 'react-redux';
import './Search.scss';

//IMPORT REDUX ELEMENTS
import { showUsers } from '../../redux/usersRedux';

class Search extends React.Component { 

    state = {
        searchText: ''
    }
    
    handleChange = e => {
        let searchingText = e.target.value;
        this.setState({searchText: searchingText});
    }

    handleSubmit = e => {  
        e.preventDefault();
        const { searchText } = this.state;
        const { showUsers } = this.props;
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

const mapDispatchToProps = { showUsers };

export default Search = connect(null, mapDispatchToProps)(Search);


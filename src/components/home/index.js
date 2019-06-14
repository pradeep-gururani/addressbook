import React, { Component } from 'react';
import SearchBar from '../Generic/search';
import UserGridElement from '../Generic/userGridElement';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
    }
    // state = {  }
    render() { 
        return ( 
            <div className="home">
                <SearchBar />
                <UserGridElement />
            </div>
         );
    }
}
 
export default Home;
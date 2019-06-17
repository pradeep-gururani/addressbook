import React, { Component } from 'react'
class SearchBar extends Component {
    state = {  }

    searchUSers = ()=>{
        let firstName = this.refs.fname;
        let lname = this.refs.lname;
        
    }
    render() { 
        return ( 
        <div className="searchBar fixed">
            <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form className="card card-sm" onSubmit ={}>
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                   
                                    <div className="col d-flex">
                                        <input ref="fname" className="form-control form-control-lg form-control-borderless" type="search" placeholder="first name.."/>
                                        <input ref="lname" className="form-control form-control-lg form-control-borderless" type="search" placeholder="last name.."/>
                                    </div>
                                   
                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>                        
                    </div>
        </div> 
        );
    }
}
 
export default SearchBar;
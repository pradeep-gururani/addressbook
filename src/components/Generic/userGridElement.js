import React, { Component } from 'react';
import placeholder from '../../images/placeholder.jpg';
import {connect} from 'react-redux';
import * as actions from "../../redux/actions";
import InfoPopUp from '../Generic/infoPopup';

class userGridElement extends Component { 
    constructor(props) {
        super(props);
        this.state = {          
          showPopUp:false,
          popUpData: ''
        };
    }  

    componentDidMount() {
        this.props.getUserData();
    }

    showPopUp = (data)=>{
        
        this.setState({showPopUp: true});  
        this.setState({popUpData: data});         
    }
    closePopUp = ()=>{
        this.setState({showPopUp: false});  
    }
    render() { 
        
        const userData = this.props.userdata && this.props.userdata.data;
        return ( 
            <div className="gridElement row justify-content-center">
                { userData
                    ?
                    userData.results.filter(
                        (data,id) =>(id<50)
                          
                      ).map((data,i)=>(
                        <div key={i} className="col-12 col-md-10 col-lg-8 userRowContainer">
                            <div className="d-flex userRow ">
                                <div className="imgDiv">
                                    <img src={data.picture.thumbnail} />
                                </div>
                                <p>{data.name.first}</p>
                                <p>{data.name.last}</p>
                                <p>{data.login.username}</p>
                                <p>{data.email}</p>
                                <button className="btn btn-info"
                                    onClick={ ()=>{                                        
                                            this.showPopUp(data)
                                        }
                                    }
                                >
                                    More
                                </button>
                            </div>
                        </div>                        
                    ))                    
                    :<>
                    </>
                }
                {
                    this.state.showPopUp&&<InfoPopUp  popUpData = {this.state.popUpData}
                                                    closePopUp = {this.closePopUp}
                                            />
                }
                
            </div>
         );
    }
}
 
const mapStateToProps = state => ({
    userdata: state.getUserData.userdata.data,
  });
  
  const mapDispatchToProps = dispatch => ({
    getUserData: data => dispatch(actions.getUserDataRequest(data))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(userGridElement);
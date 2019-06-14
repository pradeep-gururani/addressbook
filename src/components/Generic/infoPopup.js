import React, { Component } from 'react';
class InfoPopUp extends Component {    
    render() { 
        
        const moreInfo = this.props.popUpData;                
        let closePopup =  this.props.closePopUp ;
        return (  
            
            <div className="infoPopUp ">
                <button className="btn btn-danger close"
                    onClick={()=>{
                        closePopup();
                    }
                 }
                >
                    X
                </button>
                <div className="additional">
                <div className="col-12 col-md-10 col-lg-8 userRowContainer">
                            <div className="d-flex userRow ">                                
                                <p>{moreInfo.name.first}</p>
                                <p>{moreInfo.name.last}</p>
                                <p>{moreInfo.login.username}</p>
                                <p>{moreInfo.email}</p>                                
                            </div>
                        </div>         
                </div>
            </div>
        );
    }
}
 
export default InfoPopUp;


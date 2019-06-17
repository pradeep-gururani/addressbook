import React, { Component } from 'react';
class InfoPopUp extends Component {    
    render() { 
        
        const moreInfo = this.props.popUpData;                
        let closePopup =  this.props.closePopUp ;
        console.log('1111111111',moreInfo);
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
                            <h3>
                                Additional Info
                            </h3>
                            <div className="rowHeader d-flex">
                                <p>street</p>
                                <p>city</p>
                                <p> state</p>
                                <p>postcode</p>  
                                <p>phone</p>                              
                                <p>cell</p> 
                            </div>
                            <div className="d-flex userRow ">                                
                                <p>{ moreInfo && moreInfo.location.street}</p>
                                <p>{ moreInfo && moreInfo.location.city}</p>
                                <p>{ moreInfo && moreInfo.location.state}</p>
                                <p>{ moreInfo && moreInfo.location.postcode}</p>  
                                <p>{ moreInfo && moreInfo.phone}</p>                              
                                <p>{ moreInfo && moreInfo.cell}</p>
                            </div>
                        </div>         
                </div>
            </div>
        );
    }
}
 
export default InfoPopUp;


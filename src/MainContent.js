import React from "react";
import {Container} from 'react-bootstrap';

class MainContent extends React.Component {
    constructor(props){
        super (props);
    }


render() {
    return (
        <Container>
            <div className ="container-fluid">
                <div className="row row-cols-md-1">
                    <div className="col-sm-4 col-md-4 banner_img">
                        <img src="./img1.png"></img>
                    </div>
                    <div>Hi</div>
 
               
                </div>
            </div>
        </Container>
    )
}
}
export default MainContent;
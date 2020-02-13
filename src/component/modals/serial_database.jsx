import React, { Component } from 'react';
import {Modal,Button, Form} from 'react-bootstrap';
class SerialDatabase extends Component {
   constructor(props){
       super(props);
       this.state = {

       }
   }
    render() { 
        return ( 
            <Modal show={this.props.serialdatabasepopup} onHide = {this.props.handle_serialdatabasepopup.bind(this,"serialdatabasespopup_close")} className="customModal verify_rounds serial_db">               
                 <Modal.Header closeButton>
                <div className="titles">
                <div className="title">Random.org Serial Database</div>               
                </div>
                </Modal.Header>              
                <Modal.Body>
                    <p>
                    If you haven't read about our new Provably Fair system, please do so on either the Jackpot or Coinflip PF pages. 
                    </p>
                    <p>
                    In this part of our site you are able to enter any Serial Number and our system will tell you which game it was linked to, and other important details to verify this with random.org. This will also prove we haven't made multiple calls to get a favorable outcome in certain games. <b>{`Please note serials 1-17 were used for off-site testing when the system was being implemented and some of the other serials above it (25&27) were used for live testing aswell and may be missing. `}</b>
                    </p>
                   
            </Modal.Body>
            <Modal.Footer>
            <Form>
                <Form.Group controlId="formBasicText"> 
                    <Form.Control type="text" placeholder="Serial Number" />    
                </Form.Group> 
                <Button>Verify Serial Number</Button>
                </Form>
            </Modal.Footer>
               
            </Modal>
         );
    }
}
 
export default SerialDatabase;
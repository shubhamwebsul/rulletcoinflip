import React, { Component } from "react";
import { Modal, Button, Form, Accordion, Card} from "react-bootstrap";
import "../faq/faq.scss";
import Faq from '../../assets/images/faq.png';
class faq extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="main_page faq">
                <div className="container-fluid">
                    <div className="inner_wrapper">
                        <div className="row">
                        <div className="col-md-12">
                               <div className="first">
                                  <img src={Faq} alt=""/> <span><p>Frequently Asked Questions</p></span>
                               </div>
                            </div>
                            <div className="col-md-12">
                               <Accordion defaultActiveKey="0">
                                <Card>
                                <Card.Header>
                                    <p>Write clear and concise pages.</p>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <p>In terms of FAQ pages, "the more the merrier" is actually a fallacy. Too much text can end up being too confusing, causing readers to have to search for the answer they need. Rather than writing long and eloquent paragraphs, it's best to be straightforward and brief when providing answers.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                                </Card>
                                <Card>
                                <Card.Header>
                                <p>Write clear and concise pages.</p>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                        <p>In terms of FAQ pages, "the more the merrier" is actually a fallacy. Too much text can end up being too confusing, causing readers to have to search for the answer they need. Rather than writing long and eloquent paragraphs, it's best to be straightforward and brief when providing answers.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                                </Card>
                                <Card>
                                <Card.Header>
                                <p>Write clear and concise pages.</p>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                        <p>In terms of FAQ pages, "the more the merrier" is actually a fallacy. Too much text can end up being too confusing, causing readers to have to search for the answer they need. Rather than writing long and eloquent paragraphs, it's best to be straightforward and brief when providing answers.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                                </Card>
                                <Card>
                                <Card.Header>
                                <p>Write clear and concise pages.</p>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                        <p>In terms of FAQ pages, "the more the merrier" is actually a fallacy. Too much text can end up being too confusing, causing readers to have to search for the answer they need. Rather than writing long and eloquent paragraphs, it's best to be straightforward and brief when providing answers.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                                </Card>
                                <Card>
                                <Card.Header>
                                <p>Write clear and concise pages.</p>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                        <p>In terms of FAQ pages, "the more the merrier" is actually a fallacy. Too much text can end up being too confusing, causing readers to have to search for the answer they need. Rather than writing long and eloquent paragraphs, it's best to be straightforward and brief when providing answers.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                                </Card>
                                <Card>
                                <Card.Header>
                                <p>Write clear and concise pages.</p>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                        <p>In terms of FAQ pages, "the more the merrier" is actually a fallacy. Too much text can end up being too confusing, causing readers to have to search for the answer they need. Rather than writing long and eloquent paragraphs, it's best to be straightforward and brief when providing answers.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>           
        );
    }
}
 
export default faq;
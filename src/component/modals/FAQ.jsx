import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./modals.css";
class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Modal
        show={this.props.faqmodal}
        onHide={this.props.faqmodalOpen.bind(
          this,
          "faqmodal_close"
        )}
        className="customModal verify_rounds clooose_button"
      >
        <Modal.Header className="FAQ_header">
          <h4>Frequently Asked Questions</h4>
        </Modal.Header>
        <Modal.Body>
         <p><span>Ques.=></span> Write clear and concise pages.</p>
         <p><span>Ans.=></span> In terms of FAQ pages, "the more the merrier" is actually a fallacy. Too much text can end up being too confusing, causing readers to have to search for the answer they need. Rather than writing long and eloquent paragraphs, it's best to be straightforward and brief when providing answers.</p>
         <p><span>Ques.=></span> Write clear and concise pages.</p>
         <p><span>Ans.=></span> In terms of FAQ pages, "the more the merrier" is actually a fallacy. Too much text can end up being too confusing, causing readers to have to search for the answer they need. Rather than writing long and eloquent paragraphs, it's best to be straightforward and brief when providing answers.</p>
         <p><span>Ques.=></span> Write clear and concise pages.</p>
         <p><span>Ans.=></span> In terms of FAQ pages, "the more the merrier" is actually a fallacy. Too much text can end up being too confusing, causing readers to have to search for the answer they need. Rather than writing long and eloquent paragraphs, it's best to be straightforward and brief when providing answers.</p>
        </Modal.Body>
        <Modal.Footer>
         
            <Button
              onClick={this.props.faqmodalOpen.bind(
                this,
                "faqmodal_close"
              )}
              className="faq_cancl"
            >
              Cancel
            </Button>
          
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FAQ;

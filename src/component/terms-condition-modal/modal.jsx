
import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../terms-condition-modal/terms-condition.scss';
class TermsModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }

    confromTerm = () => {
        if (this.state.checked) {
            sessionStorage.setItem('terms', true);
            this.props.tncModalShow("tncModalClose");
        }
    }

    changeCheck = (e) => {
        this.setState({ checked: e.target.checked })
    }

    render() {
        return (
            <Modal show={this.props.tncShow}  className="customModal term-condition">
                <Modal.Header closeButton>
                    <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="terms-body">
                        <ol className="tnc_text">
                            <li>By using and visiting any section of the website operated under the URL bang.gg (“the Website”) you agree to be bound by: these Terms and Conditions (“Terms”), the Privacy Policy, any terms and conditions of promotions, any game rules, bonuses and special offers which may be found on the Website from time to time. All of the terms and conditions listed above shall together be referred to as "the Terms".</li>
                            <li>Please read the Terms carefully before agreeing to them. If you do not agree to these Terms and Conditions, you must refrain from using the Website and accessing the Services. Your further use of the Website and the Platform will be deemed as and shall constitute full acceptance of these Terms by you.
                            </li>
                            <li>You are 18 years or over. If the legal gambling age in your country of residence is greater than 18 years then you are of legal gambling age as specified by the law in your country of residence. 
                            </li>
                            <li>You are of sound mind and capable of taking responsibility for your own actions.
                            </li>
                            <li>You are aware whether participation in online gambling is legal in the country from which you are accessing the Website.
                            </li>
                            <li>You are physically located and are accessing the Website from a country in which it is legal to participate in online gambling.
                            </li>
                            <li>You are aware whether the provision of online gambling services is legal to the country from which you are accessing the Website.
                            </li>
                            <li>You are physically located in a country where the provision of online gambling services is legal.
                            </li>
                            <li>You are not physically located in a country where the provisions of online gambling services may be illegal, including but not limited to the following: USA, Australia, Hong Kong, India, Indonesia, Malaysia, United Arab Emirates, Brunei, Cambodia, North Korea, Japan, Singapore, Cyprus, Qatar, Lebanon, Poland, United Kingdom, France, Ireland, Sweden, Malta, Netherlands, Belize.
                            </li>
                            <li>You are not a citizen of any of the following countries: USA, Australia, Hong Kong, India, Indonesia, Malaysia, United Arab Emirates, Brunei, Cambodia, North Korea, Japan, Singapore, Cyprus, Qatar, Lebanon, Poland, United Kingdom, France, Ireland, Sweden, Malta, Netherlands, Belize.
                            </li>
                            <li>Your account and/or any of your date stored on the Website may be banned, deleted, or your access to the Website may be blocked, at the full discretion of website administrators. 
                            </li>
                            <li>An administrator of the Website has the right to change, cancel, add any terms to the present agreement and other regulating documents of the Website at any time unilaterally without preliminary coordination with you.
                            </li>
                            <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice. This website contains material which is owned by us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                            </li>
                            <li>Bang.gg are not liable for any items lost while using this website. We are not liable for the loss of any savings, businesses, profits or anticipated savings and loss of reputation.
                            </li>
                            <li>Bang.gg will make every reasonable effort to retrieve items lost as a result of technical bugs on the Website. 
                            </li>
                            <li>Use of this website or any of its services is STRICTLY PROHIBITED if any of the terms above are not understood and agreed to.
                            </li>
                            
                        </ol>
                    </div>

                </Modal.Body>
                <Modal.Footer className="customModalft">
                    <div className="modal-terms">
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" checked={this.state.checked} onChange={this.changeCheck} label=" I acknowledge that i have read and agree to the above Terms and Conditions" />
                        </Form.Group>

                    </div>
                    <Button variant="primary" onClick={this.confromTerm}>Accept</Button>
                    {/* <Button variant="secondary" onClick={this.props.tncModalShow.bind(this,"tncModalClose")}>Exit</Button> */}
                </Modal.Footer>
            </Modal>
        )
    }
}
export default TermsModal;


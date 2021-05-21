import React, {useState} from "react";
// reactstrap components
import {Button, Card, Col, Container, Form, FormGroup, Input, Modal, Row} from "reactstrap";
import {Link, Redirect} from "react-router-dom";

export default function LoginModal(props) {

    const [emailValue, setEmailValue] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [emailFormState, setEmailFormState] = useState("");
    const [emailPlaceholder, setEmailPlaceholder] = useState("Email")

    const onEmailChange = (e) => {

        setEmailValue(e.target.value);

        if (typeof e.target.value !== "undefined") {
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(e.target.value)) {
                setIsValid(false);
            } else {
                setIsValid(true);
            }
            handleError();
        }
    }

    const handleError = () => {
        if (isValid) {
            setEmailFormState("");
            setEmailPlaceholder("Email");
        } else {
            setEmailFormState("has-danger");
        }
    }

    const checkEmailOnSubmit = () => {
        if (isValid && emailValue !== "") {
            return <Redirect to='/profile/' />
        } else {
            setEmailValue("");
            setEmailPlaceholder("Must enter a valid password");
            setEmailFormState("has-danger");
        }
    }

    return (
        <Modal
            isOpen={props.loginModal}
            toggle={() => props.setLoginModal(false)}
            modalClassName="modal-register"
        >
            <div className="modal-header no-border-header text-center">
                <h6 className="text-muted">Welcome</h6>
                <h3 className="modal-title text-center">Log In</h3>
                <p>Doesn't take you anywhere, but why not!</p>
            </div>
            <div className="modal-body">
                <FormGroup className={emailFormState}>
                    <label>Email</label>
                    <Input
                        className='my-2'
                        value={emailValue}
                        placeholder={emailPlaceholder}
                        type="text"
                        onChange={onEmailChange}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Password</label>
                    <Input
                        className='my-2'
                        defaultValue=""
                        placeholder="Password"
                        type="password"

                    />
                </FormGroup>
                <div className='my-3'>
                    <Button
                        block className="btn-round"
                        color="default"
                        onClick={checkEmailOnSubmit}
                    >
                        Log in
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
import React, {useState} from "react";
// reactstrap components
import {Button, FormGroup, Input, Label, Modal} from "reactstrap";
import {Redirect} from "react-router-dom";

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

    // Checks if email is valid when login button is clicked
    const [redirect, setRedirect] = useState(false);
    const checkEmailOnSubmit = () => {
        if (isValid && emailValue !== "") {
            setRedirect(true);
        } else {
            setEmailValue("");
            setEmailPlaceholder("Must enter a valid password");
            setEmailFormState("has-danger");
        }
    }
    const RenderRedirect = () => {
        if (redirect) {
            return <Redirect to='/profile' />
        } else return null;
    }

    return (
        <>
        <RenderRedirect />
        <Modal
            isOpen={props.loginModal}
            toggle={() => props.setLoginModal(false)}
            modalClassName="modal-register"
        >
            <div className="modal-header no-border-header text-center">
                <h6 className="text-muted">Welcome</h6>
                <h3 className="modal-title text-center">Log In</h3>
                <p>Doesn't really log you in 😵‍💫</p>
                <p>This dialogue checks to see if your password is of a valid format.
                    If so, you'll be redirected to a fake profile page. If not, you'll
                    be prompted to enter a valid password.
                </p>
            </div>
            <div className="modal-body">
                <FormGroup className={emailFormState}>
                    <Label>Email</Label>
                    <Input
                        value={emailValue}
                        placeholder={emailPlaceholder}
                        type="text"
                        onChange={onEmailChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        defaultValue=""
                        placeholder="Password"
                        type="password"

                    />
                </FormGroup>
                    <Button
                        block className="btn-round"
                        color="default"
                        onClick={checkEmailOnSubmit}
                    >
                        Log in
                    </Button>

            </div>
        </Modal>
        </>
    );
}

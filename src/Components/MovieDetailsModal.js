import React from "react";
// reactstrap components
import {Button, FormGroup, Input, Modal} from "reactstrap";

function Example() {
    const [loginModal, setLoginModal] = React.useState(false);
    return (
        <>
            <Button
                className="btn-round"
                color="primary"
                type="button"
                onClick={() => setLoginModal(true)}
            >
                Login modal
            </Button>
            <Modal
                isOpen={loginModal}
                toggle={() => setLoginModal(false)}
                modalClassName="modal-register"
            >
                <div className="modal-header no-border-header text-center">
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => setLoginModal(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                    <h6 className="text-muted">Welcome</h6>
                    <h3 className="modal-title text-center">Paper Kit</h3>
                    <p>Log in to your account</p>
                </div>
                <div className="modal-body">
                    <FormGroup>
                        <label>Email</label>
                        <Input defaultValue="" placeholder="Email" type="text"/>
                    </FormGroup>
                    <FormGroup>
                        <label>Password</label>
                        <Input defaultValue="" placeholder="Password" type="password"/>
                    </FormGroup>
                    <Button block className="btn-round" color="default">
                        Log in
                    </Button>
                </div>
                <div className="modal-footer no-border-footer">
          <span className="text-muted text-center">
            Looking{" "}
              <a href="#pablo" onClick={e => e.preventDefault()}>
              create an account
            </a>
            ?
          </span>
                </div>
            </Modal>
        </>
    );
}

export default Example;

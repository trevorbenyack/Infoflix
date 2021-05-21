import React from "react";
// reactstrap components
import {Modal} from "reactstrap";

function Example(props) {

    return (
        <>
            <Modal
                isOpen={props.isModalOpen}
                toggle={() => props.viewModal(false)}
                modalClassName="modal-register"
            >
                <div className="modal-header no-border-header text-center">
                    <h3>{props.movieId}</h3>
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => props.viewModal(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>

                </div>
                Movie Details
            </Modal>
        </>
    );
}

export default Example;

import React from "react";
// reactstrap components
import {Button, Modal} from "reactstrap";

function MovieDetailsModal(props) {

    const movieImagePath = "https://image.tmdb.org/t/p/original/" + props.movie.poster_path;

    return (
        <>
            <Modal isOpen={props.isDetailsModalOpen} toggle={() => props.viewDetailsModal(false)}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={movieImagePath}
                             alt={props.movie.title} style={{maxWidth: '100%'}} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="card-text" style={{display: "flex", justifyContent: "flex-end"}}>
                                <button
                                    aria-label="Close"
                                    className="close mr-2"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() => props.viewDetailsModal(false)}
                                    style={{width: "10px"}}
                                >
                                    <span aria-hidden={true}>×</span>
                                </button>
                            </div>
                            <div className="row">
                                <h5 className="card-title">{props.movie.title}</h5>
                                <p className="card-text">{props.movie.overview}</p>
                                <p className="card-text"><small className="text-muted">Release Date: {props.movie.release_date}</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </>
    );
}

export default MovieDetailsModal;

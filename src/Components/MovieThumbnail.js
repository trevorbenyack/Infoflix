import React from "react";
import {Card, CardImg} from "reactstrap";

export default function MovieThumbnail(props) {
    const moviePath = "https://image.tmdb.org/t/p/original/" + props.movie.poster_path;
    // const movieTitle = props.movie.original_title;
    const movieObject = props.movie;

    return (
        <div className='col'>
            <Card onClick={() => {
                props.viewDetailsModal(true);
                props.setDetailsModalMovie(movieObject);
            }}
                style={{
                paddingRight: '0',
                paddingLeft: '0',
                cursor: 'pointer'
            }}>
                <CardImg top src={moviePath} alt="..."/>
            </Card>

        </div>

    )

}

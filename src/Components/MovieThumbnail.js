import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

export default function MovieThumbnail(props) {
    const moviePath = "https://image.tmdb.org/t/p/original/" + props.movie.poster_path;
    const movieTitle = props.movie.original_title;
    const movieId = props.movie.id;


    return (
        <Card style={{
            width: '10rem',
            paddingRight: '0',
            paddingLeft: '0',
        }}>
            <CardImg top src={moviePath} alt="..."/>
        </Card>
    )

}

import React from 'react';
import MovieThumbnail from './MovieThumbnail';
import background from "../assets/img/jeremy-yap-J39X2xX_8CQ-unsplash.jpg";
import {CardColumns, CardGroup, Container, Row} from "reactstrap";
import TestModal from "./TestModal";

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesArray: [],
            clickedMovieId: 0,
            isModalOpen: false,
            selectionValue: "0"
        }
        this.loadMovies = this.loadMovies.bind(this);
        this.setId = this.setId.bind(this);
        this.viewDetailsModal = this.viewDetailsModal.bind(this);
        this.setSelectionValue = this.setSelectionValue(this);
    }

    viewDetailsModal(isVisible) {
        this.setState({isModalOpen: isVisible})
    }

    setSelectionValue() {
        this.state = {selectionValue: this.props.selection};
        this.loadMovies();
    };

    componentDidMount() {
        this.setSelectionValue();

    }

    loadMovies() {

        const baseUrl = "https://api.themoviedb.org/3/";
        const api_key = "?api_key=b6fbc7f3f313bd395902af464ef47262";
        const language = "&language=en-US&page="
        let searchUrl = "";
        let page = 1;
        if(this.state.selectionValue === "0") {
            searchUrl = "https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
        } else if (this.state.selectionValue === "1") {
            searchUrl = baseUrl + "movie/now_playing" + api_key + language + page;
            console.log(searchUrl);
        } else if (this.props.selection === "2") {
            searchUrl = baseUrl + "movie/popular" + api_key + language + page;
            console.log(searchUrl);
        } else if (this.props.selection === "3") {
            searchUrl = baseUrl + "movie/top_rated" + api_key + language + page;
            console.log(searchUrl);
        } else if (this.props.selection === "4") {
            searchUrl = baseUrl + "movie/upcoming" + api_key + language + page;
            console.log(searchUrl);
        }

        fetch(searchUrl)
            .then(response => response.json()) // .json() resolves the response to JSON format
            .then(jsonData => this.setState({moviesArray: jsonData.results}));
    }

    // when called, this sets the value of clickedMovie to id
    // The MovieDetails component is then updated to reflect the
    // details of the movie i

    setId(id) {
        this.setState({clickedMovieId: id});
    };




    render() {
        let displayMovies = [];
        displayMovies = this.state.moviesArray
            .map(m => <MovieThumbnail
                movie={m}
                viewModal={this.viewDetailsModal}
                setId={this.setId}
            />)
        // displayMovies = this.state.moviesArray.map(this.makeMovieThumbnail);
        return (
            <Container style={{height: '100%', overflowY: 'scroll', position: 'absolute', padding: '0'}}>
                <Row style={{height: '100px'}}/>
                <Row
                    className='row row-cols-1 row-cols-md-5 g-4'>
                    {displayMovies}
                </Row>
                <TestModal
                    isModalOpen={this.state.isModalOpen}
                    viewModal={this.viewDetailsModal}
                    setId={this.setId}
                    movieId={this.state.clickedMovieId}
                />
            </Container>
        );
    }
}

export default Results;

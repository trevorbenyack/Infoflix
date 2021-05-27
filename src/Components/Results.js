import React from 'react';
import MovieThumbnail from './MovieThumbnail';
import {Container, Row} from "reactstrap";
import MovieDetailsModal from "./MovieDetailsModal";

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesArray: [],
            detailsModalMovie: {},
            isDetailsModalOpen: false
        }

        this.loadMovies = this.loadMovies.bind(this);
        this.setDetailsModalMovie = this.setDetailsModalMovie.bind(this);
        this.viewDetailsModal = this.viewDetailsModal.bind(this);
    }

    componentDidMount() {
        this.loadMovies();
    }

    loadMovies() {
        const baseUrl = "https://api.themoviedb.org/3/";
        const api_key = "?api_key=b6fbc7f3f313bd395902af464ef47262";
        const language = "&language=en-US&page="
        let searchUrl = "";
        let page = 1;
        if(this.props.selection === "5") {
            searchUrl = "https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
        } else if (this.props.selection === "1") {
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

    viewDetailsModal(isVisible) {
        this.setState({isDetailsModalOpen: isVisible})
    }

    // when called, this sets the value of clickedMovie to id
    // The MovieDetails component is then updated to reflect the
    // details of the movie i
    setDetailsModalMovie(detailsModalMovie) {
        this.setState({detailsModalMovie: detailsModalMovie});
    };

    render() {
        let displayMovies = [];
        displayMovies = this.state.moviesArray
            .map(m => <MovieThumbnail
                movie={m}
                viewDetailsModal={this.viewDetailsModal}
                setDetailsModalMovie={this.setDetailsModalMovie}
            />)

        return (
            <Container style={{height: '100%', overflowY: 'scroll', position: 'absolute', padding: '0px 12px'}}>
                <Row style={{height: '100px'}}/>
                <Row
                    className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5  row-cols-xl-6 g-4'>
                    {displayMovies}
                </Row>
                <MovieDetailsModal
                    isDetailsModalOpen={this.state.isDetailsModalOpen}
                    viewDetailsModal={this.viewDetailsModal}
                    movie={this.state.detailsModalMovie}
                />
            </Container>
        );
    }
}

export default Results;

import React from 'react';
import MovieThumbnail from './MovieThumbnail';
import background from "../assets/img/jeremy-yap-J39X2xX_8CQ-unsplash.jpg";
import {CardColumns, CardGroup, Container, Row} from "reactstrap";

class Results extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      moviesArray: [],
      clickedMovieId: 0
    }
    this.loadMovies = this.loadMovies.bind(this);
    this.setId = this.setId.bind(this);
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies() {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
    .then(response => response.json()) // .json() resolves the response to JSON format
    .then(jsonData => this.setState({moviesArray: jsonData.results}));
  }

  // when called, this sets the value of clickedMovie to id
  // The MovieDetails component is then updated to reflect the 
  // details of the movie i

  setId(id) {
    this.setState({clickedMovieId: id})
  };



  render() {
    let displayMovies = [];
    displayMovies = this.state.moviesArray.map(m => <MovieThumbnail movie={m}/> )
    // displayMovies = this.state.moviesArray.map(this.makeMovieThumbnail);
    return (
        <div className="page-header section-dark" style={{ backgroundImage: `url(${background})` }}>
          <div className="filter"/>
          {/* MovieThumbnails is passed the array of movies and the setId method */}
          {/*<MovieThumbnails moviesarray={this.state.movies} whenClicked={this.setId}/>*/}
          {/*<MovieDetails moviesarray={this.state.movies} movieId={this.state.clickedMovieId} />*/}

          <Container>
            <Row style={{
              justifyContent: 'space-between',
              paddingTop: '100px'
            }}>
              {displayMovies}
            </Row>
          </Container>
          {/*<div className="ThumbnailsContainer">*/}
          {/*  */}
          {/*</div>*/}

        </div>
      // <div className="BodyContainer">
      //
      // </div>
    );
  }
}
export default Results;

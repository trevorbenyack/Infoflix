import React from 'react';

class MovieDetails extends React.Component
{
    constructor(props) {
        super(props);

        this.getDetails = this.getDetails.bind(this);
    }


    getDetails (movie) {
        const moviePath = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
        if (movie.id === this.props.movieId)
        return (
        <div>
            <img src={moviePath} className="thumbnail"  />
            <div>Movie Name: {movie.title}</div>
            <div>Release Date: {movie.release_date}</div>
            <div>Overiew: {movie.overview}</div>
        </div>
        )
        else
        return null
      }

    render() {
        let someMovie;
        if (this.props.movieId === 0)
        {
        someMovie = <img src="https://fsa.zobj.net/crop.php?r=9tlvlL2ohMpiO8HudtHVnLuB01OOTHICTxDy3T6z7RGNRAVwOUnT6HfQoZubB2gPPuT5-B5MLARznjKUDtQpMj7Co6mczb5QgL_N-Vham1YnUDLSrcjheQeZmO5AUg0SF9fH5Rm4CI05V6Vu"  />
        }
        else{
        someMovie = this.props.moviesarray.map(this.getDetails);
        }

        return(
            <div className="DetailsContainer">
                <div>{someMovie}</div>
            </div>
            
        );
    };
}
export default MovieDetails;

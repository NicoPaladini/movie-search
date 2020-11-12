import React from 'react';
import { IMovie } from '../Services/Api';
import './Movie.css'

interface MovieProps {
  props: IMovie
}

const Movies: React.FC<MovieProps>  = (movie) => {
  return (
    <div className="movie-card">
      <div className="movie-card-content">
        <img
          className="movie-card-poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.props.poster_path}`}
          alt="props poster"
        />
        <div className="movie-card-description-wrapper">
          <h3 className="movie-card-title">{movie.props.title}</h3>
          <p className="movie-card-description">{movie.props.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Movies;
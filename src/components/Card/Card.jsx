import React from 'react';
import { useDispatch } from 'react-redux';
import RatioBar from '../RatioBar/RatioBar';
import {
  deleteMovie,
  toggleLike,
  toggleDislike,
} from '/src/utils/reducers/moviesSlice';
import likeIcon from '../../assets/like.svg';
import dislikeIcon from '../../assets/dislike.svg';

const Card = (props) => {
  const dispatch = useDispatch();
  return (
    <div className='movie-card'>
      <div>
        <h1>{props.movie.title}</h1>
        <p>Catégorie: {props.movie.category}</p>
      </div>
      <div>
        <button
          className={'like-button' + (props.movie.liked ? ' clicked' : '')}
          onClick={() => {
            dispatch(toggleLike(props.movie.id));
          }}
        >
          <img src={likeIcon} alt='like' />
        </button>
        <button
          className={
            'dislike-button' + (props.movie.disliked ? ' clicked' : '')
          }
          onClick={() => {
            dispatch(toggleDislike(props.movie.id));
          }}
        >
          <img src={dislikeIcon} alt='dislike' />
        </button>
        <RatioBar likes={props.movie.likes} dislikes={props.movie.dislikes} />
        <button
          className='delete-movie-button'
          onClick={() => {
            dispatch(deleteMovie(props.movie.id));
          }}
        >
          Delete movie
        </button>
      </div>
    </div>
  );
};

export default Card;

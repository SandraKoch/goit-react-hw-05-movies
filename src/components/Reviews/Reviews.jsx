import { getMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import { NoReviews } from 'components/NoReviews';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async id => {
      try {
        const apiResponse = await getMovieReviews(id);
        // console.log('fetch', apiResponse);
        setReviews(apiResponse.results);
      } catch (error) {
        console.log('fethMovieReviews', error);
      }
    };

    fetchMovieReviews(movieId);
  }, [movieId]);

  return reviews.length > 0 ? (
    <div className={css.reviewsWrap}>
      <ul className={css.reviewsList}>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <NoReviews />
  );
};

import { useEffect, useState } from 'react';
import { getMovieCast } from 'api';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    const fetchMovieCast = async id => {
      try {
        const apiResponse = await getMovieCast(id);
        console.log('fetch', apiResponse.cast);
        setCast(apiResponse.cast);
      } catch (error) {
        console.log('fethMovieCast', error);
      }
    };

    fetchMovieCast(movieId);
  }, [movieId]);

  return (
    <div className={css.castWrap}>
      <ul className={css.castList}>
        {cast &&
          cast.map(person => (
            <li key={person.id} className={css.person}>
              <img
                id={person.id}
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name}
                className={css.personImg}
              />
              <h3>{person.name}</h3>
              <p className={css.character}>{person.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

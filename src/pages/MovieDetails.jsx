import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'api';
import Details from 'components/Details';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [previevedMovie, setPrevievedMovie] = useState(undefined);

  useEffect(() => {
    const fetchMovieInfo = async id => {
      try {
        const apiResponse = await getMovieDetails(id);
        setPrevievedMovie(apiResponse);
        console.log('fetch', apiResponse);
      } catch (error) {
        console.log('fethMovieInfo', error);
      }
    };

    fetchMovieInfo(movieId);
  }, [movieId]);

  return <div>{previevedMovie && <Details movie={previevedMovie} />}</div>;
};

export default MovieDetails;

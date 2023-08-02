import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api';
import Details from 'components/Details';
import css from './MovieDetails.module.css';
import arrow from '../images-and-icons/arrow_left_icon.png';
import { Loader } from 'components/Loader';

// const Loader = lazy(() => import('../components/Loader/index'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [previevedMovie, setPrevievedMovie] = useState(undefined);
  const location = useLocation();

  // console.log('moviedet', location);

  useEffect(() => {
    const fetchMovieInfo = async id => {
      try {
        const apiResponse = await getMovieDetails(id);
        setPrevievedMovie(apiResponse);
        // console.log('fetch', apiResponse);
      } catch (error) {
        console.log('fethMovieInfo', error);
      }
    };

    fetchMovieInfo(movieId);
  }, [movieId]);

  return previevedMovie ? (
    <div>
      <Link to={location?.state?.from ?? '/'}>
        <div className={css.buttonWrap}>
          <button type="button" className={css.goBackBtn}>
            <span>
              <img src={arrow} alt="arrow" className={css.arrow} />
            </span>
            <span className={css.btnText}>Go back</span>
          </button>
        </div>
      </Link>

      {previevedMovie && <Details movie={previevedMovie} />}

      <nav className={css.navWrap}>
        <Link to="cast" className={css.navLink} state={location.state}>
          Cast
        </Link>
        <Link to="reviews" className={css.navLink} state={location.state}>
          Reviews
        </Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  ) : (
    <div>
      <Loader />
    </div>
  );
};

export default MovieDetails;

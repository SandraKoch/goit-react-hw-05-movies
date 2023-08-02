import { useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { searchMovies } from 'api';
import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchSearchedMovies = async query => {
      try {
        if (query !== '') {
          const apiResponse = await searchMovies(query);
          setMovies(apiResponse.results);
          // console.log('search', apiResponse);
        } else {
          setMovies(null);
        }
      } catch (error) {
        console.log('fetchSearchedMovies', error);
      }
    };

    fetchSearchedMovies(query);
  }, [query]);

  const debouncedQueryChange = debounce(searchedQuery => {
    setSearchParams({ query: searchedQuery });
    setQuery(searchedQuery);
  }, 500);

  const handleQueryChange = e => {
    debouncedQueryChange(e.target.value);
  };

  return (
    <div>
      <form className={css.form}>
        <input
          defaultValue={query}
          type="text"
          placeholder="Type the movie name..."
          onChange={handleQueryChange}
          className={css.input}
        />
        <button type="submit" disabled className={css.button}>
          ← Search here
        </button>
      </form>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default Movies;

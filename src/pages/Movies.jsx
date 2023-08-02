import { useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { searchMovies } from 'api';
import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList';

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
      <form>
        <input
          defaultValue={query}
          type="text"
          placeholder="Type the movie name here..."
          onChange={handleQueryChange}
        />
        <button type="submit" disabled>
          Search
        </button>
      </form>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default Movies;

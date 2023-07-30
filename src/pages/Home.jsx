import { getTrendingMovies } from 'api';
import MovieList from 'components/MovieList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiResults = await getTrendingMovies();
        setTrendingMovies(apiResults.results);
      } catch (error) {
        console.log('fetchMoviesError', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Most Popular Movies Right Now:</h1>
      <MovieList movies={trendingMovies} />
    </main>
  );
};

// it is important to export it as default
export default Home;

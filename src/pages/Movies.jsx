// import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [movies, setMovies] = useState();
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <form>
        <input type="text" placeholder="Type the movie name here..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Movies;

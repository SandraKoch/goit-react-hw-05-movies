const API_KEY = '81805be47c20a9977d0669120b6add4a';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTgwNWJlNDdjMjBhOTk3N2QwNjY5MTIwYjZhZGQ0YSIsInN1YiI6IjY0ODIyOWYyZDJiMjA5MDBlYmJmM2RiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QBYkVP1Y4DcB7g5RndWRVtYQ8Tp2I0wKn0TtL28dElE';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + ACCESS_TOKEN,
  },
};

export const getTrendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
    options
  );

  return response.json();
};

export const getMovieDetails = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}`,
    options
  );

  return response.json();
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.error(err));

  // fetch(
  //   `https://api.themoviedb.org/3/movie/${id}, options`
  // );

  // // console.log('response', response.json());
  //
};

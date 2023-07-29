API_KEY = '81805be47c20a9977d0669120b6add4a';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTgwNWJlNDdjMjBhOTk3N2QwNjY5MTIwYjZhZGQ0YSIsInN1YiI6IjY0ODIyOWYyZDJiMjA5MDBlYmJmM2RiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QBYkVP1Y4DcB7g5RndWRVtYQ8Tp2I0wKn0TtL28dElE',
  },
};

export const getMovies = () => {
  fetch('https://api.themoviedb.org/3/trending/all/day', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};

console.log(getMovies());

// export const findMovieById = (id) => movies.find(movie => movie.id === id)

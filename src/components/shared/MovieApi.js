const api = process.env.REACT_APP_tmdb;

const item_requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`,
  now_playing: `https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=1`,
  top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${api}`,
  action_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=28`,
  horror_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=27`,
  romance_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=10749`,
  comedy_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=35`,
};

export default item_requests;

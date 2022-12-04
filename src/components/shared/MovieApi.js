const api = process.env.REACT_APP_tmdb;

const item_requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`,
  latest: `https://api.themoviedb.org/3/movie/latest?api_key=${api}&language=en-US`,
  now_playing: `https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=1`,
  top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${api}`,
  tv_popular: `https://api.themoviedb.org/3/tv/popular?api_key=${api}&language=en-US&page=1`,
  tv_top: `https://api.themoviedb.org/3/tv/top_rated?api_key=${api}&language=en-US&page=1`,
};

export default item_requests;

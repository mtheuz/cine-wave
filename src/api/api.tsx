

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWNiYzlhMzU5NTkzY2U0MWU4ZDc3ZjBhNjI3MGExZSIsInN1YiI6IjY1YjJjMzE0ZDU1YzNkMDE0OTQwYzNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ot0M-s_ckaH1E0wFiqJsmd3QwHEznXpZeTUWnODEZFA",
  },
};

export const getMoviesNow = async () =>
  await fetch('https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1', options)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getMoviesPopular = async (page: number) =>
  await fetch(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`, options)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getMoviesTopRated = async (page: number) =>
  await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=${page}`, options)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getMoviesUpcoming = async () =>
  await fetch('https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1', options)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getMoviesDetails = async (id: number) =>
  await fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getMoviesAllGerners = async () =>
fetch('https://api.themoviedb.org/3/genre/movie/list?language=pt', options)
  .then(response => response.json())
  .catch(err => console.error(err));
  
export const getMoviesGeners = async (id: number, page: number) =>
  await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc&with_genres=${id}`, options)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getSearch = async (query: string, page:number) =>
  await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=pt-BR&page=${page}`, options)
  .then(response => response.json())
  .catch(err => console.error(err));


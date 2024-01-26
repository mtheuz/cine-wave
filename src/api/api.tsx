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

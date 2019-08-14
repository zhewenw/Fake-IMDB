const API = 'http://www.omdbapi.com/?s=';
const API_D_1 = 'http://www.omdbapi.com/?i=';
const API_D_2 = '&plot=full&r=json';

export async function fetchMovies(title) {
  const response = await fetch(API + title);
  const json = await response.json();
  return json.Search;
}

export async function fetchDetails(imdb) {
  const response = await fetch(API_D_1 + imdb + API_D_2);
  const json = await response.json();
  return json;
}

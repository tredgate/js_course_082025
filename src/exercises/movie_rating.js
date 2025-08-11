const movies = ["Forest Gump", "Blbý a blbější", "Kameňák", "Gladiator"];
const movieRatings = [9, 3, 2, 8];
const greatMovieRating = 8;
const greatMovies = [];
const greatMovieRatings = [];

// * Projití všech filmů a uložení těch dobrých (hodnocení >= 8)
movies.forEach((movie, index) => {
  const movieRating = movieRatings[index]; // ? V paramatru index máme automaticky uložené pořadí aktuálního cyklu
  if (movieRating >= greatMovieRating) {
    greatMovies.push(movie);
    greatMovieRatings.push(movieRating);
  }
});

// * Vypsání dobrých filmů do konzole
console.log("-------------------------");
console.log("⭐️ VÝBORNÉ FILMY ⭐️");
console.log("-------------------------");

greatMovies.forEach((greatMovie, index) => {
  console.log(`Film: "${greatMovie}", hodnocení: ${greatMovieRatings[index]}`);
});

// * Řešení pro klasický for
for (let i = 0; i < movies.length; i++) {
  if (movieRatings[i] >= greatMovieRating) {
    greatMovies.push(movies[i]);
    greatMovieRatings.push(movieRatings[i]);
  }
}

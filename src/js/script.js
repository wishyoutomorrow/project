const numberOfFilms = +prompt("Enter number of films: ", "")

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}


const lastFilm = prompt("Last film you have been watched: ", "")
const rating = prompt("How do you rate him?", "")

personalMovieDB.movies[lastFilm] = rating

console.log(personalMovieDB.movies)
'use strict';
let lRes = true;
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

while(lRes == true) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
          mark = prompt('На сколько оцените его?', '');

    if (lastFilm != null && mark != null && lastFilm != '' && mark != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = mark;
        console.log('done');
        lRes = false;
    } else {
        console.log('error');
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



'use strict';
let lRes = true;

let numberOfFilms; 
let favoriteGenre;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
    while (numberOfFilms == null  || numberOfFilms == '' ||  isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
    } 
}

function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }else{
        console.log("All actions are done!");
    }
}

function writeYourGenres(){
    for(let i = 1; i <=3; i++ ){
        favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        if (favoriteGenre != null  && favoriteGenre != ''){
            personalMovieDB.genres[i - 1] = favoriteGenre;
        }else{
            favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);  
        } 
    }
}

start();
showMyDB();
writeYourGenres();

function rememberMyFilms(){
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
}

rememberMyFilms();

function myFilmEducation(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

myFilmEducation();

console.log(personalMovieDB);
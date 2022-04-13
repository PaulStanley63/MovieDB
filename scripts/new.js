/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



// Код возьмите из предыдущего домашнего задания



'use strict';
let lRes = true;

let numberOfFilms; 
let favoriteGenre;

const personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function (){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
        console.log("Ok");
        while (personalMovieDB.count == null  || personalMovieDB.count == '' ||  isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
        } 
    },

     showMyDB: function(status){
        if(status == false){ // чекаем приват 
            console.log(personalMovieDB);
        }else{
            console.log("All actions are done!");
        }
    },

    toggleVisibleMyDB: function(status){
        if(status == true){
            status = false;
        }else if(status == false){
            status = true;
        }
        console.log(status);
    },

    writeYourGenres: function (){
        for(let i = 1; i <=3; i++ ){
            favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (favoriteGenre != null  && favoriteGenre != ''){
                personalMovieDB.genres[i - 1] = favoriteGenre;
            }else{
                favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);  
            } 
        }
        personalMovieDB.genres.forEach(function(item,i){
            console.log("Любимый жанр " + (i + 1) + " - это " + item);
        });
    },

     rememberMyFilms: function(){
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
    },

     myFilmEducation: function(count){  //personalMovieDB.count
        if (count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (count >= 10 && count < 30) {
            console.log("Вы классический зритель");
        } else if (count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    }

};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.myFilmEducation(personalMovieDB.count);

console.log(personalMovieDB);











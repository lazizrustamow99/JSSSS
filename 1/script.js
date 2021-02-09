var name = prompt('Как вас зовут?');
var birthYear = +prompt('Какого вы года рождения?');
var year = +prompt('Какой сейчас год?');

function info () {
    var data = 'Имя ' + name + ', Вам ' + (year - birthYear) + ' лет!'
    return data;
}
console.log(info());
alert(info())
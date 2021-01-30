var x = +prompt('Введите 1 число');
var y = +prompt('Введите 2 число');
var z = +prompt('Введите 3 число');

if (x < y < z) {
    alert(y + ' - среднее число')
}else if (x > y > z) {
    alert(y + ' - среднее число')
}else if(x > z > y) {
    alert(z + ' - среднее число')
}else if (x < z < y) {
    alert(z + ' - среднее число') 
}else if (y > x > z) {
    alert(x + ' - среднее число')
}else if (y < x < z) {
    alert(x + ' - среднее число')
}else if (y < z < x) {
    alert(z + ' - среднее число')
}else if (y > z > x) {
    alert(z + ' - среднее число')
}else if (z > x > y) {
    alert(x + ' - среднее число')
}else if (z < x < y) {
    alert(x + ' - среднее число')
}else if (z > y > x) {
    alert(y + ' - среднее число')
}else if (z < y < x) {
    alert(y + ' - среднее число') 
}else {
    alert('Ошибка!')
}


// x < y < z
// x > y > z

// x > z > y
// x < z < y

// // ------

// y > x > z
// y < x < z

// y < z < x
// y > z > x

// // ------

// z > x > y
// z < x < y

// z > y > x
// z < y < x
// var arr = [1,2 155, 45, 46,'str', {}];

// console.log(arr);

// console.log(arr[2]);

// arr[6] = 'six';
//
// console.log(arr);
//
// arr.splice(1,1); //видалити з масиву
//
// arr. length = 100;
// arr. length = 2;
//
// arr[arr.length] = '33';
// console.log( arr );
//
// var matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log( matrix[1][1] );

// var newArr = arr.concat(matrix); //додавання масивів
// console.log( newArr );
//
//
// console.log( arr.join(' ') );  //розділення масивів
// arr.push('new2');  //добавлення в кінець масиву
// console.log( arr );
//
// arr.pop(); //видаляє останій елемент
//
// console.log( arr );
// arr.unshift('up_new');//добавляє перший елемент
// arr.shift('up_new');//видаляє перший елемент
//
// var reverseArr = arr.reverse();//реверс елементів масиву
//
// console.log( reverseArr );

// var sliced = arr.slice(1,3);//вирізати елементи з якого по який
//
// // console.log( sliced );
//
// console.log( arr );
// console.log( arr.sort() );

// var arr = [1,2 155, 45, 46,'str', {}];
//
//
// var a = [];
// for (var i = 0; i < 20; i++) {
//     var new_value = Math.round(Math.random() * 10) + 5;
//     a[i] = new_value;
// //        a.push(new_value);
// }
//
// var resoult = [];
// for (var i = 0; i < a.length; i++) {
//     var current = a[i];
//     result.push(current);
// }


////////////////////111111111111111111111111////////////////////////


// var question = ["question1", "question2", "question3",
//     "question4", "question5", "question6", "question7"];
// var answers = [];
//
// var index = 0;
// while (index < question.length) {
//     var a = question[index];
//     var answ1 = prompt('Введіть число для заповнення масиву');
//     answers.push(answ1);
//     index++;
//     if (answ1 == 'q') {
//         break;
//     }
// }
// var zamina = prompt('Яке число замінити' + answers);
// var vst = +prompt('На яке число замінити?');
// answers.splice(zamina, 1, vst);
//
// console.log( answers );

///////////111111111//////////

//    Запустити цикл в якому будете запитувати в користувача числа і добавляти їх в масив.
//    Якщо користувач вводить 'q' - потрібно закінчити цикл.
//    Після того запитуєте в користувача число, яке він хоче замінити і число на яке замінити.
//    Після того проводите заміну через splice.

///////////222222222//////////

var a = [];
for (var i = 0; i < 50; i++) {
    var new_value = Math.round(Math.random() * 20) + 20;
    a[i] = new_value;
//        a.push(new_value);
}

var resoult = [];
for (var i = 0; i < a.length; i++) {
    var current = a[i];
    resoult.push(current);
}

console.log(resoult);

var arrtt = [new_value];
function arraySum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        if (ar)
        sum += array[i];
    }
    console.log(sum);
}
arraySum(a);

// Згенерувати масив з парних чисел розміром в 50 елементів.
//     Знайти суму всіх елементів цього масиву, які більші 20 і менші 30.
// Знайти добуток всіх елементів цього масиву, які більші 30 і менше 40















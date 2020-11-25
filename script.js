// alert ('Привет')
// alert ('Мир')
// alert (3 + 1+ 2);


// alert("Сейчас будет ошибка");
//      [1,2].forEach(alert)

// "use strict"
// alert("Some code")

// let message;
// message = 'Hello' //сохранить строку
// alert(message); //показывает содержимое переменной

// let user = 'Zenia',
//     age = 30,
//     message = 'lern JavaScript';

// let message;
// message = 'Hello';
// message = 'World';
// alert(message);

// let hello = 'Hello world';
// let message;
// message = hello;
// alert(hello);
// alert(message);

// let userName;
// let test123;

// let $ = 1; //обьявили переменную с именем "$"
// let _ = 2; //обьявили переменную с именем "_"
// alert($ + _);

// let let, class, return, function //нельзя использовать эти имена в переменных

// const myBirthday = "19.12.1989";
//     //myBirthday = "21.21.21";
// alert(myBirthday);

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00"
// //когда нам нужно выбрать цвет
// let color = COLOR_ORANGE;
// alert(color);

                // Task 1 - Working with variables

// let name = "Zenia";
// let admin;
// admin = name;
// alert(admin);

                // Task 2 - Giving the right name

// let Earth = "Земля";
// let currentUserName = "Zenia";

                // Task 3 - Uppercase const

// const BIRTHDAY = '19.12.1989';
// const age = someCode(BIRTHDAY);

// let n = 123;
// n = 12.345;
// alert(n);

// alert(1/0);
// alert("no number"/2);
// const bigInt = 1234567890323423421352346256n;
// alert(bigInt);

// let str = "Hi";
// let str2 = 'Single quotes are ok too';
// let phrase = `Can embed another ${str}`;
// alert(str);
// alert(str2);
// alert(phrase);

// let name = "Zenia";
// alert(`Hi, ${name}!`);
// alert(`result: ${1 + 2}`);

// let nameFieldChecked = true; //да, поле отмечено
// let ageFieldChecked = false; //нет, поле не отмечено

// let isGreater = 4 > 1;
// alert(isGreater);

// let age = null //значение переменно неизвестно

// typeof undefined // "undefined"
// typeof 0 // "number"
// typeof 10n // "bigint"
// typeof true // "boolean"
// typeof Symbol("id") // "symbol";
// typeof Math // "object"
// typeof null // "object"
// typeof alert // "function"

 //                       Task - String quotes

// let name = "Zenia";
// alert(`hello ${1}`) // "hello 1"
// alert(`hello ${"name"}`); // "hello name"
// alert(`hello ${name}`); // "hello Zenia"

//result = prompt(title, [default]);

//  let age = prompt('How old are you ?', 100);
//   alert(`Тебе  ${age} лет`);

// result = confirm(question);

// let isBoss = confirm("Ты здесь главный?");
// alert(isBoss);

                        // Task -  A simple page

// let nameUser = prompt('What is your name?');
// alert(`Your name is ${nameUser}`);

//             JS Basics [module 2] - pt.2.7 - 2.12 !!!!!!!

// let value = true;
// alert (typeof value);

// value = String(value);
// alert(typeof value);

// alert(6 / 2);  

// let str = "123";
// alert(typeof str);

// let num = Number(str);
// alert(typeof num);

// let age = Number("любая строка");
// alert(age);

// alert(Number("   123   "));
// alert(Number("123z"));
// alert(Number(true));
// alert(Number(false));

// alert(Boolean(1));
// alert(Boolean(0));

// alert(Boolean("hi"));
// alert(Boolean(""));

// let x = 1;
// x = -x;
// alert(x);


// let x = 144;
// alert( x ** (1/2));
// // alert(x % y);

// let s = "my " + "string";
// alert(s);

// let x = -3;
// alert(+x);


// let apples = "12";
// let oranges = "3";
// alert(+apples + +oranges);

// let n = 2;
// n = n + 5; /// n += 5;
// n = n * 2; /// n *= 2;
// alert(n);

// let counter = 2;
// counter--;
// alert(counter);

// let counter = 1;
// let a = counter++;
// alert(a);

// let counter = 1;
// alert(2 * ++counter);

//                             Task 2.8

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// alert(c);
// alert(d);

// let a = 2;
// let x = 1 + (a *= 2);

// alert(a); // 4
// alert(x); // 5


// let a = "" + 1 + 0;   // 10
// let b = "" - 1 + 0;   // -1
// let c = true + false; // 1
// let d = 6 / "3";      // 2
// let e = "2" * "3";    // 6
// let f = 4 + 5 + "px"; // 9px
// let g =  "$" + 4 + 5; // $45
// let h = "4" - 2;      // 2
// let i = "4px" - 2;    // Nan
// let j= 7 / 0;         // infinity
// let k = " -9 " + 5;   // -9 5 
// let l = " -9 " - 5;   // -14
// let m = null + 1;     // 1
// let n = undefined + 1;// Nan
// let o = " \t\n" - 2;  // -2

// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(i);
// alert(j);
// alert(k);
// alert(l);
// alert(m);
// alert(n);
// alert(o);


// alert(2 > 1);
// alert(2 == 1);
// alert(2 !=1 );

// alert(true == 1);   //true
// alert(false == 0);  //true

// alert(0 == false); //true
// alert(0 === false); //false

// alert(null > 0); //false
// alert(null == 0) //fasle
// alert(null >= 0) //true

                        // Task

// alert(5 > 4);                   // true
// alert("ананас" > "яблоко");     // false
// alert("2" > "12");              // true
// alert(undefined == null);       // true
// alert(undefined === null);      // false
// alert(null == "\n0\n");         // false
// alert(null === +"\n0\n");       // false


// let year = prompt('В каком году была опубликована что-то там?','');
// if (year == 2015) {
//     alert("Вы правы");
//     alert("вы такой умный !");
// } 
// else {
//     alert("А вот и не правильно!")
// }

// let year = prompt('В каком году была опубликована что-то там?','');
// if (year < 2015) {
//     alert("Это слишком рано !");
// } else 
// if (year > 2015) {
//     alert("Это слишком поздно!")
// }
// else {
//     alert("Все верно!")
// }


// let accessAllowed;
// let age = prompt("How old are you","");
// if (age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }
// alert(accessAllowed);


// let age = prompt("How old are you","");

// let accessAllowed = (age > 18) ? true : false;
// alert(accessAllowed);
//___________________________________________________

// let age = prompt("Возраст?", 18);
// let message = (age < 3) ? "Здравствуй, малыш!" : 
//     (age < 18) ? "Привет!" :
//     (age < 100) ? "Здравствуйте!" :  "Какой необычный возраст!";
// alert(message);
//___________________________________________________


                    // Tasks

// Task 1:

// // if ('1') {
// //     alert('hi');
// // }

// Task 2:
// let nameJavaScript = prompt("Какаое 'официальное' название Javascript?","");
// if (nameJavaScript == "ECMAScript") {
//     alert("Верно!");
// } else {
//     alert("Не знаете? 'ECMASCRIPT!'");
// };

// Task 3:

// let result = (a + b < 4) ? "Мало" : "Много";


//Task 4

// let message = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' : 
// (login == '') ? 'Нет логина' : '';
 
                             //   2.11

 //                            result = a || b; //  или

// alert(true || true);  //true
// alert(false || true); //true
// alert(true || false); //true
// alert(false || false) //false

// let hour = 9;
// if (hour < 10 || hour > 18) {
//     alert("Офис закрыт");
// }

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'Офис закрыт.' );    // это выходной
// }

// alert(1 || 0);   //1
// alert( true || 'no matter what' ); // true
// alert( null || 1 ); // 1 (первое истинное значение)
// alert( null || 0 || 1 ); // 1 (первое истинное значение)
// alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

// let currentUser = null;
// let defaultUser = "John";
// let name = currentUser || defaultUser || "unnamed";
// alert( name ); // выбирается "John" – первое истинное значение

// let x;
// true || (x = 1);
// alert(x); // undefined, потому что (x = 1) не вычисляется

// let x;
// false || (x = 1);
// alert(x); // 1

//                             result = a && b;    // и   

//              И -  возвращает первое ложное значение, 
//          а ИЛИ –  первое истинное

// alert(true && true);  // true
// alert(false && true); // false
// alert(true && false); // false
// alert(false && false); //false

// let hour = 12;
// let minute = 30;
// if(hour == 12 && minute == 30) {
//     alert('The time is 12:30');
// }

// Если первый операнд истинный,
// И возвращает второй:
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
// alert( null && 5 ); // null
// alert( 0 && "no matter what" ); // 0

// alert(1 && 2 && null && 3); // null
// alert(1 && 2 && 3); // 3

//Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше.

// let x = 1;
// (x > 0) && alert('Greater than zero');

// let x = 1;
// if (x > 0) {
//     alert('Greater than zero');
// }

//                          result = !value; // не

// alert(!true); //false
// alert(!0); //true

    // alert( !!"non-empty string" ); // true
    // alert( !!null ); // false

    // alert( Boolean("non-empty string") ); // true
    // alert( Boolean(null) ); // false

// то же самое 

//  ! - приоритет, && - потом, а затем - ||

//                          Tasks

// 1. 
// alert(null || 2 || undefined); // 2

// 2. 
// alert(alert(1) || 2 || alert(3)); // 1, (потому что alert(1) - undefined), потом 2

// 3.
// alert(1 && null && 2); //null

// 4.
// alert(alert(1) && alert(2)); // 1, 

// 5.
// alert(null || 2 && 3 || 4); //2

// 6.
// let age = prompt('Введите значение age =','');
// if (age >= '14' && age <= '90') {
//     alert(true);
// } else {
//     alert(false);
// }

// 7.

// let age  = prompt('Введите значение age =','');
// if (age < '14' && age > '90') {
//     alert(true);
// } else {
//     alert(false);
// }

// let age = prompt('Введите значение age =','');
// if (!(age >= '14' && age <= '90')) {
//     alert(true);
// } else {
//     alert(false);
// }

// let age = prompt('Введите значение age =','');
// if (age < 14 || age > 90) {
//     alert(true);
// } else {
//     alert(false);
// }

// 8.

// if (-1) alert('first');
// if (-1 && 0) alert('second');
// if (null || -1 && 1) alert('third');

    // 9.
//                          Мой вариант


//    let login = prompt('Введите логин','');
//    let newUser = (login == null) ? alert('Отменено') : 
//     (login == 'Админ') ? password = prompt('Введите Пароль') : alert('Я вас не знаю');

//    let answer = (password == null) ? 'Отменено' :
//     (password == 'Я главный') ? 'Здравствуйте!' :  'Неверный пароль';
//     alert(answer);


//                          Решение в теории

//   let userName = prompt("Кто там?", '');

//   if (userName == 'Админ') {
//      let pass = prompt('Пароль?', '');

//     if (pass == 'Я главный') {
//       alert( 'Здравствуйте!' );
//     } else if (pass == '' || pass == null) {
//       alert( 'Отменено' );
//     } else {
//       alert( 'Неверный пароль' );
//     }

//   } else if (userName == '' || userName == null) {
//     alert( 'Отменено' );
//   } else {
//     alert( "Я вас не знаю" );
//   }
    

//              2.12 Оператор обьединения с null и "??"

// result = a ?? b;
// result = (a !== null && a !== undefined) ? a : b;


// let user;
// alert(user ?? "Аноним"); // Аноним

// let user = 'Ivan';       // любое значение, кроме null/undefined
// alert(user ?? "Anonim"); // Ivan

//   let firstName = null;
//   let lastName = null;
//   let nickName = "Суперкодер";
//   // показывает первое определённое значение:
//   alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер


//      Сравнение с || (или)

//   let firstName = null;
//   let lastName = null;
//   let nickName = "Суперкодер";
//   показывает первое истинное значение!!!
//   alert(firstName || lastName || nickName || "Аноним"); // Суперкодер

// Важное различие между ними заключается в том, что:
// || возвращает первое истинное значение.
// ?? возвращает первое определённое значение.

// Оператор || не различает false, 0, пустую строку "" и null/undefined

// let height = 0;
// alert(height || 100); // 100
// alert(height ?? 100); // 0

// таблица Приоритетов https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table

// let height = null;
// let width = null;
// // важно использовать круглые скобки
// let area = (height ?? 100) * (width ?? 50);
// alert(area); // 5000

// //Про оператор ??= ещё можно было б написать.
// //В выражении (x ??= y) в x перейдёт значение от y, если x - это null или undefined.
let city = { name: 'Rostov', population: 1100000 };
city.population ??= 200000;
console.log(city.population); // 1100000, а не 200000
city.founded ??= 1749;
console.log(city.founded); // 1749
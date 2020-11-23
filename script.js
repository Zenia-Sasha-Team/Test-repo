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

alert(5 > 4);                   // true
alert("ананас" > "яблоко");     // false
alert("2" > "12");              // true
alert(undefined == null);       // true
alert(undefined === null);      // false
alert(null == "\n0\n");         // false
alert(null === +"\n0\n");       // false



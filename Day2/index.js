//switch case:-

//1.frist type of scenario
//we will compare the value of the vaeiable directly

// let a = 10;

// switch (a) {
//   case 10:
//     console.log("Value is 10");
//     break;
//   case 15:
//     console.log("value is 15");
//     break;
//   default:
//     console.log("default case");
// }
//2.
// let a = 50;
// switch (true) {
//   case a > 0:
//     console.log("positive value");
//     break;
//   case a < 0:
//     console.log("negative value");
//     break;
//   default:
//     console.log("zero value");
//     break;
// }

//------------------------loops--------------------------------------------

//1.for loop:

// let i = 0; //1:initallization can be return outside the loop
//example:-

// for (; i < 10; ) {
//   console.log("value of i is", i);
//   i++; //increment/decrement note:it should be in loop;
// }

//-------------------------------------------------------------------

//2.while loop:

//you must write the condition properly
//at the end of the loop you shouls have either increment/decrement

//example:-

// let i = 0;
// while (i < 10) {
//   console.log("value of i is", i);
//   i++;
// }

//----------------------------------------------------------------

//do while loop:

//example 1:
// let i = 0;
// do {
//   console.log("value is i is:", i);
//   i++;
// } while (i > 10);

//output:value is i is: 0.
//example 2:-
// do {
//   console.log("value is i is:", i);
//   i++;
// } while (i < 10);

//------------------------------------------------------------

//3.nested loops:-

//example:-

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 2; j++) {
//     console.log("value of i is", i, "and j is:", j);
//   }
// }

//------------------------Functions----------------------
//1st way to write function
// let a=10;
// let b=10;

// // let add=a+b;
// // console.log(add);

// function add()
// {                   //function defination
//   console.log(a+b);
// }

// //function exection
// add();
//-------------------------------

//2nd way to write function
//function with parameters

// function add(a,b)
// {
//   console.log(a+b);
// }
// add(20,10);
// add(30,20);

//argument:-execution: the value which we pass to a variable;
//parameters:-defination:-the value which function uses to do operation:a and b;

//3rd way with return statment:-

// function add(x, y) {
//   return x + y;//any code after return is not executable
// }
// const res = add(10, 20);
// console.log(res);

//----------------------------------------------------

//function which exist only in js

// const add = function () {
//   console.log("value");
// };
// add();

// //arrow function
// //------------------------------------------------------
// const a = () => {};
// a();

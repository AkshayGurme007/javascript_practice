//Decision Making

//if-else:-When your are having one condition
// let a = 10;
// if (a == 10) {
//   //success
// } else {
//   //fail
// }

//----------------------------------------------------
//if-else ladder:-When your are having two condition

// let a=-10;
// if(a<0)
// {
//   console.log("Negative");
// }
// else if(a==0)
// {
//   console.log("Zero");
// }
// else{
//   console.log("Positive");
// }
//--------------------------------------------------

//switch-case statment:Three or more condition
// let gender = "m";
// {
//   switch (gender) {
//     case "m":
//       console.log("male");
//   }
// }

//-------------------------------------------
//Ps1:-
// Take age as the variable
// age < 18 = Child
// greater than 18 but less than 40 = Adult
// age is greater than 40 = Old age
//ans:-
// let age = 18;
// {
//   switch (true) {
//     case age < 18:
//       console.log("Child");
//       break;
//     case 18 < age < 40:
//       console.log("Adult");
//       break;
//     default:
//       console.log("old age");
//       break;
//   }
// }

//--------------------------------------------------
//ps2:-
// take variable name as day ,
//its possible values are 0 1 2 3 4 5
// 0 = Monday
// 5 : Saturday
//Ans:
// let day = 1;
// {
//   switch (day) {
//     case 0:
//       console.log("Monday");
//       break;
//     case 1:
//       console.log("Tuseday");
//       break;
//     case 2:
//       console.log("Wednesday");
//       break;
//     case 3:
//       console.log("Thursday");
//       break;
//     case 4:
//       console.log("Friday");
//       break;
//     case 5:
//       console.log("Saturday");
//       break;
//     default:
//       console.log("Sunday");
//       break;
//   }
// }

//---------------------------------------------
//Loops//
//Iteration Statments:
//for,while,do while
//--------------------------------------------
//1.For:-
//3 values:
//initialization:
//condition:
//increment/decrement:

//var a:
//declaring a variable;
//var a=12;
//we are intializing the variable with the value 12
//example print value 1 to 10;
// for(let i=1;i<=10;i++)
// {
//  console.log(i);
// }

//// Question : Print the table of 19 like 19 * 1 = 19
// 19 * 1 = 19
// 19 * 2 = 38

// for (let i = 1; i <= 10; i++) {
//   console.log("19" + "*" + i + "=", 19 * i);
// }

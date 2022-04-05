//js is functional programing language
//-----JQuery

// $(".heading").click(function () {
//   $("p").hide();
// });

// $("#heading2").dblclick(function () {
//   $("p").hide();
// });

// $("h2").dblclick(function () {
//   $("span").hide();
// });

// $("#heading2").dblclick(function () {
//   $(this).hide();
// });

//---------Ajax
//Is a function which takes an object of diff keys
$("button").click(function(){
     $.ajax({
       url:"https://jsonplaceholder.typicode.com/todos",
       type:"GET",
       success:function(data)
       {
         console.log(data);
       }
     })
})
//CRUD:-Create,read,update,delete
//GET POST PUT DELETE

class A {
  constructor(name) {
    this.username = name;
  }
  print() {
    console.log("Name is :", this.username);
  }
}
var a = new A("Akshay");
a.print();
console.log(a.username);

// class B extends A {}

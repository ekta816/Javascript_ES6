var name = prompt("What is your name?");
var first = name.slice(0,1).toUpperCase();// create a greeting with first letter capitalized
var last = name.slice(1,name.length).toLowerCase();//make sure the other letters are lower case
name = first+last;
alert("Hello " + name); 

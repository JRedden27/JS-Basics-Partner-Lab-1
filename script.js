//let num1 = Number(prompt("Enter a number:"));
//let num2 = Number(prompt("Enter another number:"));

//let answer = (num1 / num2);

//alert(answer);

let num3 = Math.floor((Math.random()* 10)+1);
let guess = Number(prompt("Guess Number"));

if(num3 === guess){
    alert("Your Right!!!");
} else{
    alert("Your Wrong");
}

// // document.write("Hello,World");
// // let base  = prompt ("Please enter some value" );
// // var height = prompt("Please enter height");
// // var area=(base*height)/2;
// // // console.log(area);
// // console.log('base: '+base + 'height: '+height+'area: ' +area);

// // area of traingel using hero's formula
// let a=prompt("");
// b=prompt("");
// // c=prompt("");
// // s=(a+b+c)/2;
// // console.log(s);
// //  let temp = s*(s-a)*(s-b)*(s-c);
// //  area=Math.sqrt(temp);
// //  console.log(temp);

// console.log(`the value of  is:${a},the value of b is:${b}`);
// // var temp;
// // temp=a;
// // a=b;
// //  b=temp;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log( `after swapping
// \n the value of a is:${a},\n The value od b is:${b}  `);
// // toconvert kilometers functioninto
// function convert(){
//   var kms=document.getElementById('data').value;
//   const factor=0.621371;
//   var miles=kms*factor;
//   alert(miles);
//   document.getElementById('res').innerText=`${miles} miles`
// }

//To conert fahrenhiet to celcius
// function convert ( ) {
//     let  C = document.getElementById('data').value;
//     F=(C*1.8)+32;
//     document.getElementById('res').innerText=`${C}C=${F}F`
// }
// to check whether a number is Positive ,negative,zero
// function check () {
// var value = document.getElementById(' data').value;
// var res = Math.sign(value);
// document.getElementById('res').innerText=res;
// }
// for a user defined funcction
// function check() {
//   var value = document.getElementById("data").value;
//   if (value > 0) {
//     res = `${value} is a +ve number`;
//   } else if (value < 0) {
//     res = `${value} is a -ve number`;
//   } else if (value === 0) {
//     res=`res=${value} is a zero Number`;
//   } 
//   document.getElementById("res").innerText = res;

// }

// to generate random number and make a 4 digit OTP(One Time Password)

// var a = Math.random();
// console.log("Before Calculation",a);
// a=a*(100000);
// console.log("After Calculation"+a);
// console.log("Floor Calculation "+Math.floor(a)


//  to check an odd number/even number
// let x =prompt("");
// if ( x%2==0){
//     console.log(`${x} is an even number`);
// } else {
//     console.log(`${x} is an odd number`);
// }"
// var res= x%2 == 0 ? "Even":"Odd";
// console.log(`${x} is an ${res} number`);


// Program to check if a Number is a Prime Number( A postive number divisible by 1 snd itslef)
// let x = prompt("Please Enter a number","");
//  if ( x == 1 ) {
//     console.log(`${ x} is neither prime nor composite`);
//  } else if ( x < 1) {
//     console.log(`${x} is not a prime number`);
// } else{
//     for ( let i = 2;  i < x ; i++){
//         if ( x % i==0 ) {
//             var res=`${x} is not a prime number`;
//             break;
//         } else {
//             var res=`${x} is a prime number`;
//         }
//     }
//     console.log(res);
// }

// Program to find largest of all three  numbers

// d=Math.min(a,b,c);
// console.log(`${d} is the minimum number`);
// d=Math.max(a,b,c);
// console.log(`${d} is the maximum number`);
// function check ( a,b,c) {
//     if ( a>=b&& a>=c){
//        return a;
//     } else if ( b>=a && b>=c){
//         return c;
//     }else{
//         return b;
//     }
//     a = prompt("");
//     b = prompt("");
//     c = prompt("");
// var x=check(a,b,c);
// console.log(`${a},${b},${c}:Largest=%{x}`);

// }

// Find Factor ial of a number
// let number = prompt("Please enter a number");
// var fact=1;
// if(number==0){
//     console.log(`thd factorial of${number} is 1`)
// } else if (number < 0) {
// console.log(`the factorial of -ve number is not possible`);
// } else {
//     for ( let i=1; i<=number; i++){
//         fact=fact*i;
//         console.log(`the factorial of ${number} is ${fact}`);
//     }
// }


// find Factorial using Recursion
// let number=prompt("");
// var factr = 1;
// console.log(fact);
// function fact ( n ) { 
// if ( n > number) {
//     return;
// }
// fact= fact * n;
// n++;
// fact(n);

// }
// fact (1);

// Program to checkc ARMSTRONG NUMBERS
// let a = prompt ("Plese enter any number","");
//  let   temp = number;
//  var sum = 0;
// //  while ( temp > 0) {
//  var digit = temp % 10;
//  console.log(digit);
 
//  sum += digit **3;
//  console.log(sum);
//  temp = parseInt (temp / 10);
//  console.log( temp);
//  console.log ( '-----------');

// // }

//Program to check if anumber has same last digit
let string = prompt("");
let stringArray = string.split ('');
let stringArrayRev = stringArray.reverse ();
let revstring= stringArrayRev.join('');
if ( string===revstring) {
    console.log(`{string} is Plaindrome`)
} else {
    console.log(`{string} is mot a Palindrome`)
}
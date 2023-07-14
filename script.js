"use strict"

// 1.Write a JavaScript program to find the sum of all the numbers in an array

// function findArraySum(arr){
//     let sum =0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//         console.log(sum);
//     }
// }
// findArraySum([5,7,8,7,5,2]);

// 2.Write a JavaScript program to find the largest and smallest elements in an array.

// let givenarray = [3 , 6, 2, 56, 32, 5, 89, 32];
// let largest= 0; 

//     for(let i=0; i<givenarray.length; i++){
//         if(givenarray[i]>largest){
//             largest = givenarray[i];
//             console.log(`${largest} is a largest number`);
//         }else if(givenarray[i]<largest) {
//             console.log(`${largest} is a smallest number`);
//         }
        
//     }

//Write a JavaScript program to check if a given number is positive, negative, or zero.

// function signfind(num)
// {
//     if(num==0){
//         console.log(`num is 0`);
//     }else if(num<0){
//         console.log(`${num} is a negative number`);
//     }else{
//         console.log(`${num} is a Positive number`);
//     }
// }
// signfind(0);


//4.Write a JavaScript program to check if a given string, is a palindrome.


// function palindromeCheck(str){
//     let givenString = str.split('');
//     let reversedString = givenString.reverse();
//     let joinedString = reversedString.join('');

//     if(joinedString == str){
//         console.log(`${reversedString} is palindrome`);
//     }else {
//         console.log(`${reversedString} is not palindrome`);
//     }


// }
// palindromeCheck("madam");

// let somestring = "malayalam";
// const newwl = somestring.split("").reverse();
// const els = newwl.join("");
// console.log(els);


//7.Write a JavaScript program to remove items from a drop-down list. Sample HTML file:

// let colorSelect = document.getElementById("colorSelect");

// function removecolor(){
//     for(let i=0; i<colorSelect.option.length; i++){
//         let removeEle = colorSelect.option[i];
//         removeEle.remove(i);

//     }
// }

// colorSelect.addEventListener("click", removecolor(event){
//     if()
// })


//Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.Sample numbers: 3, -7, 2


function productOfThreeNumber(num1, num2, num3){
    let product = num1 * num2 * num3;

    if(product>0){
        console.log(`${product} is having + sign`);
    }else {
        console.log(`${product} is having - sign`);
    }
}
productOfThreeNumber(7,-3,9);

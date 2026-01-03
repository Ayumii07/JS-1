//Q no 1
for (var i = 1; i <= 10; i++) {
    console.log(i); 
}

//Q no 2
let j = 2;
while(j <= 20){
    console.log(j);
    j += 2;
}

//Q no 3
var sum = 0; 
for (var i = 1; i <= 100; i++) {
    sum = sum + i; 
}
console.log("The sum of numbers from 1 to 10 is: " + sum);

//Q no 4
for(let i=1;i<=10;i++){
    console.log("5 x "+i+" = "+ 5*i);
}

//Q no 5
let numbers = [5, 9, 11, 13, 80];
let largest = numbers[0];
for(let i=1; i<numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}
console.log("Largest number is", largest);
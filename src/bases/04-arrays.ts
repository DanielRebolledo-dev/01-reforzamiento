const myArray = [1,2,3,4,5,6];

myArray.push(10);
myArray.push(20);

console.log(myArray)

for (const myNumber of myArray){
    console.log(myNumber + 10);
}
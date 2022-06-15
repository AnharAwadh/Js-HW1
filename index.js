
//Calculate area of a rectangle
console.log("Calculate area of a rectangle");
let width=5;
let hight=8;
console.log("The area "+" "+(width+hight));
console.log("*****************************");

//The Temperature Converter

let celsius=11;
let celsiustofhranit=celsius* 9 / 5 + 32;
console.log("The Temperature Converter From celsius To Frha "+celsiustofhranit);
let fhra=20;
let fhratocelsius=(fhra - 32) * 5 / 9;
console.log("The Temperature Converter From Frha To celsius "+ fhratocelsius);

//number sum
console.log("sum the number");
console.log("******************");
let numbers=[1,2,3,4,5];
let sum=0;
for (let i = 0; i < numbers.length; i++) {
    sum +=numbers[i];}
    console.log("The sum of Numbers "+ sum);
    console.log("************");
    //Max
    let arry=[1,2,3,4];
    let max=arry[0];
    for (let i = 0; i < arry.length; i++) {
        if (max<arry[i]) {
        
            max=arry[i];
        
        }
        
    }
    console.log("The max "+ max);
    console.log("************");

    //Array Reverce
    let arry2= [1,2,3,4,5,6,7,8,9,10];
    console.log("The array befor revecer {"+arry2+"}");
    for (let i = arry2.length-1; i >-1; i--) {
        console.log(arry2[i]);

    }
   
  //stars pattern
let norow=5;
let space="\n";
for (let i = norow; i > -1; i--) {
   for (let j = norow; j >= i; j--) {
    space+="*";
   }
    space+="\n";
}
console.log(space);






    



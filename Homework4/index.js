let i = 0;
let arr1 = [];
while (i < 100){
    arr1[i] = i;
    i++;
}

function getReversedArr(arr){
    let newArr = [...arr];
    return newArr.reverse();
}

let arr2 = getReversedArr(arr1);



let arr3 = [...arr1];
i = 0;
while (i < arr1.length){
    arr3[i] = arr1[i] - arr2[i];
    i++;
}

function getAVG(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}


let avg = getAVG(arr3);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(avg);

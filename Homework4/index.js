
function shuffleArray(arr){
    let i = 0;
    while (i < arr.length){
        let j = Math.floor(Math.random() * arr.length);
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
    }
}

let arr1 = Array(100).fill(0).map((e, i) => i + 1);
shuffleArray(arr1);

function getReversedArr(arr){
    let newArr = [...arr];
    return newArr.reverse();
}

let arr2 = getReversedArr(arr1);

let arr3 = [...arr1].map((e, i) => arr1[i] - arr2[i]);

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

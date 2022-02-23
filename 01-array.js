//soal 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse() {
  
    const new_arr = arr.reverse();
    const new_arr2 = arr2.reverse();
    
    console.log(new_arr);
    console.log(arr2);
}
reverse();

//soal 2
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    let sum = 0;
    let counter = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    let avg = sum / arr.length;
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > avg){
            counter++;
        }
    }
    return counter;
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))

//soal 3
const arr = [ [10], [9,7,1], [2,8], ];

function searchInArray(arr, num) {
    let tempArr = [];
    for(let i = 0; i < arr.length; i++){
        let number = arr[i];
            for(let j = 0; j < number.length; j++){
                tempArr.push(number[j]);
            }
    }

    for(let k = 0; k < tempArr.length; k++){
        if(tempArr[k] === num){
            var found = true;
            var index = k;
        }
    }

    if(found){
        return index;
    }else{
        return'null';
    }
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
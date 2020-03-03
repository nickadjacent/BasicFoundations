function arr1to255() {
    var arr = []
    for (i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(arr1to255);




function sumeven1000() {
    var sum = 0;
    for (var i = 0; i <= 1000; i = i + 2) {
        sum += 1;
    }
    return sum;
}

console.log(sumeven1000);




function sumodd5000() {
    var sum = 0;
    for (var i = 1; i <= 5000; i = i + 2) {
        sum += 2;
    }
    return sum;
}

console.log(sumodd5000);




function iterarr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(iterarr(arr));




function findmax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}

console.log(findmax(arr));




function findaverage(arr) {
    var avg = 0;
    for (i = 0; i < arr.length; i++) {
        avg = avg + arr[i];
    }
    return avg / arr.length;
}

console.log(findaverage(arr));




function oddnumbers() {
    var arr = [];
    for (var i = 1; 1 < 50; i = i + 2) {
        arr.push(i);
    }
    return arr;
}

console.log(oddnumbers());




function greaterY(arr, Y) {
    var count = 0;
    for (var i = 0, i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    return count;
}

console.log(greaterY(arr, Y));




function squareValue(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

console.log(squarevalue(arr));




functon noneg(arr){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(noneg(arr));




function maxMinAvg(arr) {
    var min = arr[0]
    var max = arr[0]
    var sum = arr[0]
    for (var i = 1, i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
        if (min > arr[i]) {
            min = arr[i]
        }
        sum = sum + arr[i]
    }
    var avg = sum / arr.length
    var arrnew = [max, min, avg]
    return arrnew;
}

console.log(maxMinAvg(arr));




function swapArraa(arr) {
    var temp = arr[0]
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = temp
    return arr;
}

console.console.log(swayArr(arr));




function numToString(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo'
        }
    }
    return arr;
}

console.log(numToString(arr));
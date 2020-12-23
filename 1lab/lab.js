function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function getMin(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}
function getMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
function getMedian(arr) {
    if (arr.length % 2 == 1) {
        return quickselect(arr, arr.length / 2)
    } else {
        return 0.5 * (quickselect(arr, arr.length / 2 - 1) +
            quickselect(arr, arr.length / 2))
    }
}
function quickselect(l, k) {
    if (l.length == 1) {
        return l[0]
    }

    pivot = l[Math.floor(Math.random() * l.length)]

    lows = l.filter(el => el < pivot)
    highs = l.filter(el => el > pivot)
    pivots = l.filter(el => el == pivot)

    if (k < lows.length) {
        return quickselect(lows, k)
    }
    else {
        if (k < lows.length + pivots.length) {
            return pivots[0]
        } else {
            return quickselect(highs, k - lows.length - pivots.length)
        }
    }
}
function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];
      
    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }
a = Array.from({ length: 1000 }, () => getRandomArbitrary(0, 40))
console.log(a)
console.log("Min: ", getMin(a))
console.log("Max: ", getMax(a))
console.log("Median: ", getMedian(a))
console.log("Sorted: ", quickSort(a))
console.log("a - ", document.getElementsByTagName("a").length)
console.log("div - ", document.getElementsByTagName("div").length)
console.log("section - ", document.getElementsByTagName("section").length)

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}
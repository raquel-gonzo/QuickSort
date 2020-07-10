// Hoare's Partitioning Algo

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;
    const pivot = arr[Math.floor((left + right) / 2)];
    const index = partition(arr, left, right, pivot);
    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);
    return arr;
}

function partition(arr, left, right, pivot) {
    while (left <= right) {
        while (arr[left] < pivot && left <= right) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            ([arr[left], arr[right]] = [arr[right], arr[left]]);
            left++;
            right--;
        }
    }
}

//Steps:
// 1) assign a pivot element
// 2) Partition - sort the array into two sections. 
    //Values less than the pivot got to the left (i) of the pivot. Values to the right go to the right (j) of the pivot.
// 3) Recursively apply steps 1 and 2 to the sub-array to the left (i) of pivot, and to the sub-array to the right (j) of the pivot.








// the time complexity of quick sort is O(n log n). (bad).
// helpful links: 
// https://www.bigocheatsheet.com/
// https://itnext.io/a-sort-of-quick-guide-to-quicksort-and-hoares-partitioning-scheme-in-javascript-7792112c6d1
// Hoare's Partitioning Algo

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;
    const pivot = arr[Math.floor((left + right) / 2)];
    partition(arr, i, j, pivot)
}

function partition(arr, i, j, pivot) {
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            ([arr[i], arr[j]] = [arr[j], arr[i]]);
            i++;
            j--;
        }
    }
}

// the time complexity of quick sort is O(n log n). (bad).
// helpful links: 
// https://www.bigocheatsheet.com/
// https://itnext.io/a-sort-of-quick-guide-to-quicksort-and-hoares-partitioning-scheme-in-javascript-7792112c6d1
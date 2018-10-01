/*
 * Returns a random integer between min (inclusive) and max (exclusive)
 */
function getRandomInt(min, max) {
	let r = Math.random();
    return Math.floor(Math.random() * (max - min) + min);
}

/*
 * This function generates an array of random integers of length n.
 */
function generateRandomArray(n){
	let arr = []
	for(i=0;i<n;i++){
		arr[i]=getRandomInt(1, n+1);
	}
	return arr;
}

/*
 * Performs a MergeSort on the provided array and returns a new, ascendingly sorted
 * array.
 */
function mergeSort(arr){	
	return [];
}

/*
 * Merges two sorted arrays into one larger sorted array, which it returns. 
 */
function merge(arr1,arr2){
	let merged = [];
	
	// TODO: write logic to merge two subarrays
	
	return merged;
}
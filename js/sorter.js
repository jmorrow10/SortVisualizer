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
	if(arr.length == 1){
		return (arr)
	}

		let mid = (arr.length / 2);
		let arr1 = arr.slice(0,mid);
		let arr2 = arr.slice(mid, arr.length);
		return merge(mergeSort(arr1), mergeSort(arr2));
	
}

/*
 * Merges two sorted arrays into one larger sorted array, which it returns. 
 */
function merge(arr1,arr2){
	let merged = [];
	// TODO: write logic to merge two subarrays
	while(arr1.length != 0 || arr2.length != 0){
		if(arr1.length == 0){
			merged.push(arr2.shift());
		} else if (arr2.length == 0){
			merged.push(arr1.shift());
		} else if (arr1[0] > arr2[0]){
			merged.push(arr2.shift());
		} else {
			merged.push(arr1.shift());
		}	
	}
	return merged;
}
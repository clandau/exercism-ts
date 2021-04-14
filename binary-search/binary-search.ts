export default class BinarySearch {
  array: Number[] | undefined;

 constructor(arry: number[]) {
   let prior = -Infinity;
   for (let n of arry) {
    if (n < prior) {
      return;
    }
    prior = n;
   }
   this.array = arry;

 }

 indexOf(n: number): number {
   if (!this.array) return -1;
   let startIndex = 0;
   let endIndex = this.array.length - 1;
   let middleIndex = Math.floor((endIndex + startIndex) / 2)
   while (endIndex >= startIndex) {
      middleIndex = Math.floor((endIndex + startIndex) / 2)
     if (n === this.array[middleIndex]) {
       return middleIndex;
     } else if (n < this.array[middleIndex]) {
       endIndex = middleIndex - 1;
     } else {
       startIndex = middleIndex + 1;
     }
   }
  return -1;
 }
}

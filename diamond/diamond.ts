export default class Diamond {
  // constructor() {};

  makeDiamond(letter: string): string {
    const letters = ["A", "B", "C", "D", "E", "F", "G"];

    const letterIndex = letters.indexOf(letter);

    // if the letter is A, we can return it
    if (letterIndex === 0) return letter + "\n";

    const rowLength = letters.indexOf(letter) * 2 + 1;
    let rowNumber = 0;
    const resultArray = [];
    while (rowNumber < letters.indexOf(letter)) {
      let outsideDotNumber = letterIndex - rowNumber;
      const insideDotNumber = rowLength - 2 - outsideDotNumber * 2;
      let rowArray = [];
      // start with the middle dots
      if (insideDotNumber >= 0) {
        rowArray = new Array(insideDotNumber).fill(" ");
      }
      rowArray.push(letters[rowNumber]);
      if (rowNumber > 0) {
        rowArray.unshift(letters[rowNumber]);
      }

      // add the dots to the front and back of the array
      while (outsideDotNumber > 0) {
        rowArray.push(" ");
        rowArray.unshift(" ");
        outsideDotNumber--;
      }
      resultArray.push(rowArray.join("") + "\n");
      rowNumber++;
    }

    const reversedArray = [...resultArray].reverse();
    // make last row
    const rowArray = new Array(rowLength - 2).fill(" ");
    rowArray.push(letter);
    rowArray.unshift(letter);
    resultArray.push(rowArray.join("") + "\n");
    return resultArray.concat(reversedArray).join("");
  }
}

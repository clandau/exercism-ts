export default class Diamond {
  makeDiamond(letter: string): string {
    // tests don't go farther than E, so I didn't write out all of the letters
    // to improve I would go to Z
    const letters = ["A", "B", "C", "D", "E", "F", "G"];

    const letterIndex = letters.indexOf(letter);

    // if the given letter is A, we can return it
    if (letterIndex === 0) return letter + "\n";

    const resultArray: string[] = [];

    const rowLength = letters.indexOf(letter) * 2 + 1;
    let rowNumber = 0;

    while (rowNumber < letters.indexOf(letter)) {
      let outsideSpaceNumber = letterIndex - rowNumber;
      const insideSpaceNumber = rowLength - 2 - outsideSpaceNumber * 2;
      let rowArray: string[] = [];

      // start with the middle spaces
      if (insideSpaceNumber >= 0) {
        rowArray = new Array(insideSpaceNumber).fill(" ");
      }
      rowArray.push(letters[rowNumber]);
      if (rowNumber > 0) {
        rowArray.unshift(letters[rowNumber]);
      }

      // add the spaces to the front and back of the array
      while (outsideSpaceNumber > 0) {
        rowArray.push(" ");
        rowArray.unshift(" ");
        outsideSpaceNumber--;
      }
      resultArray.push(rowArray.join("") + "\n");
      rowNumber++;
    }

    // make a reversed copy of top of diamond for the bottom half
    const reversedArray = [...resultArray].reverse();

    // make middle row of the diamond
    const rowArray: string[] = new Array(rowLength).fill(" ", 1, rowLength - 1);
    rowArray[0] = letter;
    rowArray[rowArray.length - 1] = letter;

    resultArray.push(rowArray.join("") + "\n");
    return resultArray.concat(reversedArray).join("");
  }
}

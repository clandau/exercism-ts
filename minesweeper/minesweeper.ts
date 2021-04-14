export default class Minesweeper {
  annotate(input: string[]): string[] {
    // make a copy with preexisting mines
    const returnMines = input.map((i) => {
      return [...i];
    });

    for (let i = 0; i < input.length; i++) {
      const prior = returnMines[i - 1];
      const next = returnMines[i + 1];

      for (let j = 0; j < input[i].length; j++) {
        const priorAndPostMask = new Array(input[i].length).fill(" ");
        const rowMask = [...returnMines[i]];
        if (input[i][j] === "*") {
          priorAndPostMask[j] = "1";
          j - 1 >= 0 && priorAndPostMask[j - 1] !== "*"
            ? (priorAndPostMask[j - 1] = "1")
            : null;
          j + 1 < input[i].length && priorAndPostMask[j + 1] !== "*"
            ? (priorAndPostMask[j + 1] = "1")
            : null;

          if (i - 1 >= 0) {
            returnMines[i - 1] = mergeRows(priorAndPostMask, prior);
          }
          if (i + 1 < input.length) {
            returnMines[i + 1] = mergeRows(priorAndPostMask, next);
          }
          if (rowMask[j - 1] !== "*" && j - 1 >= 0) {
            rowMask[j - 1] = "1";
          }
          if (rowMask[j + 1] !== "*" && j + 1 < input[i].length) {
            rowMask[j + 1] = "1";
          }
          returnMines[i] = mergeRows(rowMask, returnMines[i]);
        }
      }
    }
    console.log(returnMines);
    return returnMines.map((row) => row.join(""));
  }
}

function mergeRows(a: string[], b: string[] | null): string[] {
  if (!b) return a;
  const returnArray = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "*" || b[i] === "*") {
      returnArray.push("*");
    } else {
      const num1 = parseInt(a[i]) || 0;
      const num2 = parseInt(b[i]) || 0;
      returnArray.push((num1 + num2).toString());
    }
  }
  return returnArray;
}

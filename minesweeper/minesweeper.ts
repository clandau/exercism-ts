type BoxItems = "_" | " " | number;

export default class Minesweeper {
  annotate(input: string[]): string[] {
    // make a copy with preexisting mines
    const returnMines = input.map((row) => {
      return [...row];
    });

    for (let i = 0; i < input.length; i++) {
      const prior = returnMines[i - 1];
      const next = returnMines[i + 1];
      const priorAndPostMask = new Array(input[i].length).fill(" ");

      for (let j = 0; j < input[i].length; j++) {
        const rowMask = [...input[i]];
        if (input[i][j] === "*") {
          priorAndPostMask[j] = evalMineBlock(priorAndPostMask[j]);
          if (j - 1 >= 0) {
            priorAndPostMask[j - 1] = evalMineBlock(priorAndPostMask[j - 1]);
          }
          if (j + 1 < input[i].length) {
            priorAndPostMask[j + 1] = evalMineBlock(priorAndPostMask[j + 1]);
          }
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
      const returnSum = num1 + num2;
      returnSum === 0
        ? returnArray.push(" ")
        : returnArray.push(returnSum.toString());
    }
  }
  return returnArray;
}

function evalMineBlock(char: string): string {
  if (char === " ") return "1";
  if (char === "*") return "*";
  if (typeof parseInt(char) === "number") {
    return (parseInt(char) + 1).toString();
  }
  throw new Error("Invalid type");
}

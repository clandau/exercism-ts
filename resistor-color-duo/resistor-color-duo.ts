export class ResistorColor {
  private colors: string[];
  private colorNumbers = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors;
  }
  value = (): number => {
    const stringVal = this.colorNumbers
      .indexOf(this.colors[0].toLowerCase())
      .toString()
      .concat(
        "",
        this.colorNumbers.indexOf(this.colors[1].toLowerCase()).toString()
      );
    return parseInt(stringVal);
  };
}

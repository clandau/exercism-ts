import Diamond from "./diamond";

function diamondify(parts: TemplateStringsArray): string {
  return (
    parts[0]
      .trim() // Remove leading and trailing whitespace
      .split("\n") // Consider each row
      .map((line) => {
        return line
          .trim() // Remove whitespace at start (and end)
          .replace(/·/g, " "); // Use spaces instead of ·
      })
      .filter(Boolean) // Remove empty rows (if any)
      .join("\n") + // Turn back into a single string
    "\n"
  ); // Should have a final newline
}

describe("Make diamond function", () => {
  const diamond = new Diamond();

  test("test letter A", () => {
    const result = "A\n";
    expect(diamond.makeDiamond("A")).toEqual(result);
  });

  test("test letter C", () => {
    const result = diamondify`
      ··A··
      ·B·B·
      C···C
      ·B·B·
      ··A··
    `;
    expect(diamond.makeDiamond("C")).toEqual(result);
  });

  test("test letter E", () => {
    const result = diamondify`
      ····A····
      ···B·B···
      ··C···C··
      ·D·····D·
      E·······E
      ·D·····D·
      ··C···C··
      ···B·B···
      ····A····
    `;
    expect(diamond.makeDiamond("E")).toEqual(result);
  });
});

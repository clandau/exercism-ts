import BinarySearch from "./binary-search"

describe("BinarySearch", () => {
  const sortedArray = [0, 2, 4, 6, 8, 10, 12, 14, 16]
  const sortedArrayOfOddLength = [0, 1, 2, 2, 3, 10, 12]
  const unsortedArray = [10, 2, 5, 1]

  it("should require a sorted array", () => {
    const invalidBinarySearch = new BinarySearch(unsortedArray)
    const validBinarySearch = new BinarySearch(sortedArray)

    expect(typeof invalidBinarySearch.array).toEqual("undefined")
    expect(Array.isArray(validBinarySearch.array)).toEqual(true)
  })

  it("should find the correct index of an included value", () => {
    expect(new BinarySearch(sortedArray).indexOf(14)).toEqual(7)
  })

  it("should search the middle of the array", () => {
    expect(new BinarySearch(sortedArrayOfOddLength).indexOf(2)).toEqual(3)
  })

  it("should return -1 for a value not in the array", () => {
    expect(new BinarySearch(sortedArray).indexOf(11)).toEqual(-1)
  })
})

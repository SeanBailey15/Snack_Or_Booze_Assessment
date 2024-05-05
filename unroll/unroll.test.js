const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a matrix of strings", function () {
    const matrix = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
    ];
    expect(unroll(matrix)).toEqual([
      "a",
      "b",
      "c",
      "f",
      "i",
      "h",
      "g",
      "d",
      "e",
    ]);
  });

  it("unrolls a matrix of numbers", function () {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    expect(unroll(matrix)).toEqual([
      1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
    ]);
  });

  it("unrolls a mixed matrix of strings and numbers", function () {
    const matrix = [
      [1, "b", 3, "d"],
      [5, "f", 7, "h"],
      [9, "j", 11, "l"],
      [13, "n", 15, "p"],
    ];
    expect(unroll(matrix)).toEqual([
      1,
      "b",
      3,
      "d",
      "h",
      "l",
      "p",
      15,
      "n",
      13,
      9,
      5,
      "f",
      7,
      11,
      "j",
    ]);
  });

  it("throws an error when given an empty matrix", function () {
    const matrix = [];
    expect(() => unroll(matrix)).toThrow(Error);
  });
});

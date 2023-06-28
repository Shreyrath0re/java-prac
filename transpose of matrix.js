const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function transposeMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const transpose = [];
  for (let j = 0; j < numCols; j++) {
    const row = [];
    for (let i = 0; i < numRows; i++) {
      row.push(matrix[i][j]);
    }
    transpose.push(row);
  }
  return transpose;
}
const transposedMatrix = transposeMatrix(matrix);
console.log("Original Matrix:");
console.log(matrix);
console.log("Transposed Matrix:");
console.log(transposedMatrix);

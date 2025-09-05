class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    // THE FIX: Use 'this' to call other methods within the same class.
    if (!this.areRowsValid(board)) return false;
    if (!this.areColsValid(board)) return false;
    if (!this.areBoxesValid(board)) return false;

    return true;
  }

  /**
   * Helper method to check if all rows are valid.
   * MOVED INSIDE THE CLASS
   */
  areRowsValid(board) {
    for (let r = 0; r < 9; r++) {
      const seen = new Set();
      for (let c = 0; c < 9; c++) {
        const cellValue = board[r][c];
        if (cellValue === ".") continue;
        if (seen.has(cellValue)) {
          return false;
        }
        seen.add(cellValue);
      }
    }
    return true;
  }

  /**
   * Helper method to check if all columns are valid.
   * MOVED INSIDE THE CLASS
   */
  areColsValid(board) {
    for (let c = 0; c < 9; c++) {
      const seen = new Set();
      for (let r = 0; r < 9; r++) {
        const cellValue = board[r][c];
        if (cellValue === ".") continue;
        if (seen.has(cellValue)) {
          return false;
        }
        seen.add(cellValue);
      }
    }
    return true;
  }

  /**
   * Helper method to check if all 3x3 boxes are valid.
   * MOVED INSIDE THE CLASS
   */
  areBoxesValid(board) {
    for (let boxIndex = 0; boxIndex < 9; boxIndex++) {
      const seen = new Set();
      const startRow = Math.floor(boxIndex / 3) * 3;
      const startCol = (boxIndex % 3) * 3;

      for (let rowOffset = 0; rowOffset < 3; rowOffset++) {
        for (let colOffset = 0; colOffset < 3; colOffset++) {
          const r = startRow + rowOffset;
          const c = startCol + colOffset;
          const cellValue = board[r][c];
          if (cellValue === ".") continue;
          if (seen.has(cellValue)) {
            return false;
          }
          seen.add(cellValue);
        }
      }
    }
    return true;
  }
}

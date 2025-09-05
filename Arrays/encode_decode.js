class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodedString = "";
    let count;
    for (let str of strs) {
      count = str.length;
      encodedString = encodedString + count + "#" + str;
    }
    return encodedString;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let i = 0;
    let result = [];
    while (i < str.length) {
      let j = str.indexOf("#", i);
      let lenghtStr = str.slice(i, j);
      let lenght = parseInt(lenghtStr);
      let word = str.slice(j + 1, j + 1 + lenght);
      result.push(word);
      i = j + 1 + lenght;
    }
    return result;
  }
}

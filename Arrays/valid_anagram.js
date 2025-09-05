class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const frequencyMap = new Map();
    if (s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
      if (frequencyMap.has(s[i])) {
        frequencyMap.set(s[i], frequencyMap.get(s[i]) + 1);
      } else {
        frequencyMap.set(s[i], 1);
      }
    }

    for (let i = 0; i < t.length; i++) {
      if (frequencyMap.has(t[i])) {
        frequencyMap.set(t[i], frequencyMap.get(t[i]) - 1);
      } else {
        return false;
      }
    }

    for (let count of frequencyMap.values()) {
      if (count !== 0) return false;
    }
    return true;
  }
}

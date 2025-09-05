class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const wordMap = new Map();
        for(let str of strs){
            let key = str.split('').sort().join('')
            if(wordMap.has(key)){
                wordMap.get(key).push(str)
            }
            else{
                wordMap.set(key,[str])
            }
        }

        return Array.from(wordMap.values())
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const anagramMap = new Map();
        for(let i=0; i<s.length; i++){
            if(anagramMap.has(s[i])) {
                anagramMap.set(s[i], anagramMap.get(s[i]) + 1);
            }else {
                anagramMap.set(s[i], 1);
            }
           
        }

        for(let i=0; i<t.length; i++) {
            if(!anagramMap.has(t[i])) return false;
            if(anagramMap.get(t[i]) > 0) {
                anagramMap.set(t[i], anagramMap.get(t[i])-1);
            }else {
                return false;
            }

        }
        return true;
    }
}

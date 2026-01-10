const str = 'abcdecabcdefghjcbabcdaa'

const longestSubstring = (str) => {
    let left = 0, right = 0
    let maxlen = 0, start = 0
    let strSet = new Set()

    for(let right=0; right <= str.length; right++) {
        while(strSet.has(str[right])) {
            strSet.delete(str[left])
            ++left
        }
        strSet.add(str[right])
        // maxlen = Math.max(maxlen, right - left + 1)
        if(right-left+1 > maxlen) {
            maxlen = right-left+1
            start = left
        }
    }
    console.log(str.slice(start, start + maxlen));
    console.log(maxlen);
    
    return [strSet, maxlen]
}

longestSubstring(str)
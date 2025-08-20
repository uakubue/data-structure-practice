
function validAnagram(first, second) {
    if(first.length !== second.length) {
        return false;
    }

    const charCount = {};

    for(let i = 0; i < first.length; i++) {
        let letter = first[i];
        charCount[letter] ? charCount[letter] += 1 : charCount[letter] = 1;
    }
    console.log(charCount);

    for(let i = 0; i < second.length; i++) {
        let letter = second[i];
        if(!charCount[letter]) {
            return false;
        } else {
            charCount[letter] -= 1;
        }
    }
    return true;
}


validAnagram("listen", "silent"); // true
validAnagram("orange", "rangeo"); // false
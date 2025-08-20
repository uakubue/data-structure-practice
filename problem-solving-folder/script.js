function MyFrequencyChar(first, second){
    if(first.length !== second.length){
        return false;
    }

    let myCharCOunt = {}

    for(let i = 0; i < first.length; i++){
        let letter = first[i]
        myCharCOunt[letter] ? myCharCOunt[letter] += 1 : myCharCOunt[letter] = 1;
    }

    console.log(myCharCOunt);

    for(let i = 0; i < second.length; i++){
        let letter = second[i]
        if(!myCharCOunt[letter]){
            return false;
        } else {
            myCharCOunt[letter] -= 1;
        }
    }
}

MyFrequencyChar("listen", "silent"); // true
MyFrequencyChar("hello", "world"); // false
function longestword(str){
    let words = str.split(" ");
    let longestword = " ";
    
    for (word of words){
        if(word.length > longestword.length){
            longestword = word
        }
    }
    
    return longestword;
}



console.log(longestword("i have a bad dayyyyy"))
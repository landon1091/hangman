// make a function that accepts an array of words
// and returns one of those words randomly

let words = ['spaghetti', 'meatballs', 'dog', 'cat', 'fish'];
let randomword = pickword(words); // store the output of the pickword function here.
let totalguesses = numguesses(randomword);
let letter = 't';
console.log(randomword);
console.log(totalguesses)
function pickword(words) {
    let x = words[Math.floor(Math.random() * words.length)];
    return x;
}

// after the random word is picked make another function that tells you how
// many guesses you get depending on the word. 

function numguesses(randomword) {
    return 5;
}


// write a function that takes the word and splits it into individual characters
// then show the indexes of the characters. 
function findletter(randomword, letter){
    let wordarray = randomword.split(''); // .split makes it into an array 
    let position =  wordarray.indexOf(letter);
    // if(position = -1){
    //     totalguesses = totalguesses - 1;
    // }
    return position;
}

console.log(findletter(randomword, letter));

window.addEventListener('load', function () {

// let submit = document.getElementById('submit');
// submit.addEventListener('click', function() {
//     findletter(randomword, letter);
// })
})

var letters = [
              ['A','A','C','I','O','T'],
              ['A','H','M','O','R','S'],
              ['E','G','K','L','U','Y'],
              ['A','B','I','L','T','Y'],
              ['A','C','D','E','M','P'],
              ['E','G','I','N','T','V'],
              ['G','I','L','R','U','W'],
              ['E','L','P','S','T','U'],
              ['D','E','N','O','S','W'],
              ['A','C','E','L','R','S'],
              ['A','B','J','M','O','Q'],
              ['E','E','F','H','I','Y'],
              ['E','H','I','N','P','S'],
              ['D','K','N','O','T','U'],
              ['A','D','E','N','V','Z'],
              ['B','I','F','O','R','X']
             ];
var die = [];
for (var i = 0; i<letters.length; i++) {
       die[i]=(letters[i][Math.floor(Math.random() *  letters[i].length)]);
}


function shuffle(die) {
    var current = die.length,
        temp,
        randomIndex;
 //While the are still elements to shuffle
    while (0 !== current) {
        randomValue = Math.floor(Math.random() * current);
        current--;

//Swap current with randomIndex
        temp = die[current];
        die[current] = die[randomIndex];
        die[randomIndex] = temp;
    }
    return die;
}

 alert(die);
//curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
//sudo apt-get install -y nodejs/* eslint-env node */
 
const dice = require('./dice');

const faces = [1, 2, 3, 4, 5, 6];


var die1 = new dice(faces);
var die2 = new dice(faces);

die1.roll();
die2.roll();

var total = die1.getCurrentFace() + die2.getCurrentFace();


console.log( '' );
console.log( '' ); 
console.log( 'Dice 1: ', die1.getCurrentFace() );
console.log( 'Dice 2: ', die2.getCurrentFace() );

console.log( 'You Rolled: ', total);


// These should be emitted events from the dealer object
if( total == 7 ) console.log( '**************** WINNER! "CRAPS!" ****************' );

if( total == 11 ) {
    
    console.log( 'What\'s the haps on the craps?');
    console.log( 'Shake \'em up, shake \'em up, shake \'em up, shake \'em' );
    console.log( 'Roll \'em in a circle of niggaz and watch me break \'em' );
    console.log( 'with the seven, seven-eleven, seven-eleven' );
    console.log( 'Seven even back do\' Lil\' Joe');
    console.log( '******You picked up the cash flow*****' );
}


if( die1.getCurrentFace() == 1 && die2.getCurrentFace() == 1 ) {
    console.log( 'SNAKE EYES!' );
}



console.log( '' );
console.log( '' );
 

 
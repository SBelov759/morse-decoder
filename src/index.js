const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


const MorseObjectZero = {};
for (key in MORSE_TABLE) {
let primer ='';
[key].splice("").map(function (x){
for (point of x) {
if (point===".") {
primer +="10"}
if (point=== "-") {
primer += "11"} 
} 
while (primer.length<10) {
let doubleZero = "00";
primer = doubleZero.concat(primer);
}  
       
    return MorseObjectZero[primer] = MORSE_TABLE[key];
   });  
}
MorseObjectZero["**********"] = " ";

function decode(expr) {
let word = '';
for (i=0; i<expr.length; i+=10 ){
if (i === " ") {
word += " ";
}
word += MorseObjectZero[expr.slice(i, i+10)]; 
}
return word;    
}

module.exports = {
    decode
}
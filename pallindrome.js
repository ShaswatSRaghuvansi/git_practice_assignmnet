// P A L L I N D R O M E   O F   A   N U M B E R 

// as we can traverse the string so we can convert the number into string and then compare


let num = 1234;
let str = num.toString();   // shortcut to CONVERT
let len = str.length;       // storing length of new string
let bag="";                 // to write horizontally


for ( let i=0; i>=0; i-- ){    // MISTAKE 1 : let i = len - 1
  bag += str[i];
}
if ( bag === str ){
  console.log("Yes");
}else {
  console.log("No");
}

// ANOTHER SHORTCUT WAY OF CONVERTING
let num2 = 12345;

let str2 = ""+num2;

console.log(typeof(str2));

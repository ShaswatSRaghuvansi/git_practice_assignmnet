let num = 13;
let count=0;

for ( let i=1; i<=num; i++ ){   
  if( num % 2 === 0 ){		// mistake 1 : num % i === 0
    count++;
  }
}
if( count==3 ){ 		// mistake 2 : count == 2
  console.log("Yes");
}else {
  console.log("No")
}
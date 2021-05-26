let floors = 6; //how many floors

buildTower(floors); //function call

//print the return using iteration method 😁

/** 
 * 😈 Introduce to you The evil javascript tower 😈
function recieves number of floors to build a tower
the function returns an array as the following

e.g.
*****[tower of 1 floor]*****
[
  '*'
]
*****[tower of 3 floors]*****
[
  '  *  ', 
  ' *** ', 
  '*****'
]
*****[tower of 6 floors]*****
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/
function buildTower(nFloors) {
  let str = '* ';
  for (let index = 1; index <= nFloors; index++) {
    for (let j = 0; j < nFloors-(nFloors-1); j++) {
      console.log("  ".repeat(nFloors-index)+str.repeat(2*index-1))
    } 
  }  
}

/*The string "PAYPALISHIRING" is written in a zigzag pattern
  on a given number of rows like this: 
  (you may want to display this pattern in a fixed font for better legibility)

  P   A   H   N
  A P L S I I G
  Y   I   R

  And then read line by line: "PAHNAPLSIIGYIR"
  
*/ 

function zigzagConvert(s, numRows) {
  var result = [];
  var step = 1, index = 0;
  for(var i = 0; i < s.length; i++){
    if(result[index] === undefined){
        result[index] = '';
    }
    result[index] += s[i];
    if(index === 0){
      step = 1;
    } else if(index === numRows - 1){
      step = -1;
    }
    index += step;
  }
  return result.join('');
}
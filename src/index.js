module.exports = function count(s, pairs) {   
  
  let N = 1, k = 0;
  let i, j;
  let len = pairs.length;

  for (i = 0; i < len; i++) {
    //var a = pairs[i][0];
    //var b = pairs[i][1];
    N = N * Math.pow(pairs[i][0], pairs[i][1]); //bigPow(a, b);
  }  
    
  N = N % 1000000; 

  for (i = 0; i < N; i++) {
    for (j = 0; j < s.length; j++) {
      if (s[j] == 1) {
        if (gcd(N, i+j) !== 1) { break;}
        else if (j === s.length - 1) { k++; }
      } 
      else {  
        if (gcd(N, i+j) == 1) { break;} 
        else if (j === s.length - 1) { k++; }
      }
    }
  }

  return k;

  function gcd (a,b) {return (!b) ? a : gcd(b, a % b);};

}



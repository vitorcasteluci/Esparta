function Solution(N, M) {
  if(M%N === 0) return 1;
  if(N%M === 0) return N/M;
  let wrappers = []
  let i = 0 
  let count = 0;
  while(!wrappers[i]){
    wrappers[i] = true;
    count++;
    i = (i+M)%N
  }
 console.log(count)    
}
Solution(10, 4)
function Solution(N, M) {
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
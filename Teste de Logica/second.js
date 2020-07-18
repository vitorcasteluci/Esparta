function Solution(A){
  let newA = []
  let result = 0
  for(let i = 0; i< A.length; i++){
    if(!newA.includes(A[i])){
      newA.push(A[i])
    }
  }
result = newA.length
console.log(result)
}
Solution([2,1,1,2,3,1])
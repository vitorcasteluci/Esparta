function Solution(A) {
 let result = 0
  A.forEach(element => {
    result ^= element
  });
  console.log(result)
}

Solution([9,3,9,3,9,7,9])
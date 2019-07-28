function fib(n) {

  // Compute the nth Fibonacci number
  let fib1 = 0
  let fib2 = 1;
  let tmp;
  
  if (n < 0) {
    throw new Error('No negative numbers');
  }
  
  if (n <= 1) {
    return n;
  }
  
  for (let i = 1; i < n; i++) {
    tmp = fib1 + fib2;
    fib1 = fib2;
    fib2 = tmp;
  }
  
  return fib2;
}

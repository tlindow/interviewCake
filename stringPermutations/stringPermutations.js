function getPermutations(string) {

  // Generate all permutations of the input string
  if (string.length <= 1) {
    return [string];
  }
  
  let firstChar = string.slice(0, 1);
  let restOfChars = string.slice(1);
  let subPermutations = getPermutations(restOfChars);
  
  let permutations = [];
  subPermutations.forEach(subPermutation => {
    for (let i = 0; i <= restOfChars.length; i++) {
      let permutation = subPermutation.slice(0, i) + 
                        firstChar + subPermutation.slice(i);
      permutations.push(permutation);
    }
  });
  
  return permutations;
}

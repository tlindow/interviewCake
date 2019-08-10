function getPermutations(string) {
  const permutations = new Set([]);
  const firstChar = string[0];
  
  if (string.length <= 0) {
    return new Set([string]);
  }
  
  const subPerms = getPermutations(string.slice(1));
  subPerms.forEach(subPerm => {
    for (let i = 0; i <= subPerm.length; i++) {
      let perm = subPerm.slice(0, i) + firstChar + subPerm.slice(i);
      permutations.add(perm);
    }
  });
  return permutations;
}

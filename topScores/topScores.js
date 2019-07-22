function sortScores(unorderedScores, highestPossibleScore) {  
  const scoresCounts = unorderedScores.reduce((acc, next) => {
    if (!acc[next]) {
      acc[next] = 0;
    }
    acc[next]++;
    return acc;
  }, {});
  
  const sortedScores = [];
  for (let i = highestPossibleScore; i >= 0; i--) {
    if (scoresCounts[i]) {
      while(scoresCounts[i]) {
        sortedScores.push(i);
        scoresCounts[i]--;
      }
    }
  }

  return sortedScores;
}

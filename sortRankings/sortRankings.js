function sortRankings(incomingMessages) {
  const rankings = [];
  let maxReceiverCount = 0;
  const receiverCounts = incomingMessages.reduce((acc, next) => {
    if (!acc[next.receiver]) {
      acc[next.receiver] = { count: 0, senders: {} };
    }

    if (!acc[next.receiver].senders[next.sender]) {
      acc[next.receiver].count++;
      acc[next.receiver].senders[next.sender] = true;
    }

    if (acc[next.receiver].count > maxReceiverCount) {
      maxReceiverCount = acc[next.receiver].count;
    }
    return acc;
  }, {});

  for (var key in receiverCounts) {
    let tmp = receiverCounts[key].count;
    if (!receiverCounts[tmp]) {
      receiverCounts[tmp] = [];
    }
    receiverCounts[tmp].push(key);
    delete receiverCounts[key];
  }

  for (let i = maxReceiverCount; i >= 0; i--) {
    if (receiverCounts[i]) {
      receiverCounts[i].forEach(receiver => {
        rankings.push(receiver);
      });
    }
  }
  return rankings;
}

let incomingMessages = [
{receiver: 'tyler', sender: 'jael'},
{receiver: 'tyler', sender: 'jael'},
{receiver: 'jael', sender: 'tyler'},
{receiver: 'jael', sender: 'bob'}
];

// console.log(sortRankings(incomingMessages));
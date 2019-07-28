function mergeRanges(meetings) {
  let mergedCount = 0;
  let i = 1;
  const mergedMeetings = [];
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });
  mergedMeetings.push(sortedMeetings[0]);

  while (i < meetings.length) {
    if (sortedMeetings[i].startTime <= mergedMeetings[mergedCount].endTime) {
      if (sortedMeetings[i].endTime > mergedMeetings[mergedCount].endTime) {
        mergedMeetings[mergedCount].endTime = sortedMeetings[i].endTime;
      }
    } else {
      mergedMeetings.push(sortedMeetings[i]);
      mergedCount++;
    }
    i++;
  }
  return mergedMeetings;
}

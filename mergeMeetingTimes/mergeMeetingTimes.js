function mergeRanges(meetings) {

  // Merge meetings ranges
  // sort by startTime
  // loop through
  // if any of the endTime is greater than the next start time
      //change end time to next end time, and splice out next tuple
      //stay on currernt tuple
      
  meetings.sort((a, b) => a.startTime - b.startTime);
  
  let i = 0;
  while (i < meetings.length - 1) {
    if (meetings[i].endTime >= meetings[i + 1].startTime) {
      if (meetings[i + 1].endTime > meetings[i].endTime) {
        meetings[i].endTime = meetings[i + 1].endTime;
      }
      meetings.splice(i + 1, 1);
    } else {
      i++
    }
  }
  return meetings;
}

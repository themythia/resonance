// handles time strings for progress bar and playlistitem
// kinda unnecessary as we deal with songs that are 30 seconds
// but leaving here for future developments

export const handleTime = (time) => {
  const date = new Date(null);
  date.setMilliseconds(time); // specify value for milliseconds here
  const dateString = date.toISOString();
  if (time < 600000) {
    // less than 10 mins returns m:ss
    return dateString.substring(15, 19);
  } else if (time < 3600000) {
    // less than an hour returns mm:ss
    return dateString.substring(14, 19);
  } else if (time < 36000000) {
    // less than 10 hours returns h:mm:ss
    return dateString.substring(12, 19);
  } else return dateString.substring(11, 19); // else returns hh:mm:ss
};

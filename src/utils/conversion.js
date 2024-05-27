export const formatNumber = (num) => {
  var suffixes = ["", "K", "M", "B", "T"];
  if (num === 0) {
    return "0";
  }
  var magnitude = 0;
  while (Math.abs(num) >= 1000 && magnitude < 4) {
    magnitude++;
    num /= 1000.0;
  }
  var formattedNum = num.toFixed(1);
  if (formattedNum.length > 5) {
    formattedNum = num.toFixed(0);
  }
  // Ensure output is up to 3 characters
  var output = formattedNum.substring(0, 3);
  // Remove trailing decimal point if present
  if (output.charAt(output.length - 1) === ".") {
    output = output.substring(0, 2);
  }
  return output + suffixes[magnitude];
};

export const formatDate = (date) => {
  // Extracting date components
  var day = date.getDate();
  var month = date.getMonth() + 1; // Months are zero indexed
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // Adding leading zeros if necessary
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Constructing the formatted string
  var formattedDate =
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    " | " +
    day +
    "/" +
    month +
    "/" +
    year;
  return formattedDate;
};

// To truncate any text
export const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
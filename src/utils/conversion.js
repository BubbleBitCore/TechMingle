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

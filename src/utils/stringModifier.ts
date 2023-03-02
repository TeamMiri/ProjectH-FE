export function getNumberFromPxString(pxString: string) {
  // Extract the numeric part of the string using a regular expression
  const matches = pxString.match(/\d+/);

  // If a numeric part is found, return it as a number, otherwise return null
  return matches ? parseInt(matches[0]) : 0;
}

function convertToIntegerById(elementId) {
  const getElement = document.getElementById(elementId);
  const getStringvalue = getElement.value;
  const convertedValue = parseInt(getStringvalue);
}
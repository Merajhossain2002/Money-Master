function inputValueToIntegerById(elementId) {
  const getElement = document.getElementById(elementId);
  const getStringvalue = getElement.value;
  const convertedValue = parseInt(getStringvalue);
  return convertedValue;
}

function textValueToIntegerById(elementId) {
  const getElement = document.getElementById(elementId);
  const getStringvalue = getElement.innerText;
  const convertedValue = parseInt(getStringvalue);
  return convertedValue;
}

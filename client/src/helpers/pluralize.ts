export function pluralize(
  value: string | number,
  firstForm: string,
  secondForm: string,
  thirdForm: string
) {
  const strValue = value.toString();
  const length = strValue.length;

  if (strValue.endsWith("1")) {
    return `${value} ${firstForm}`;
  } else if (
    ["2", "3", "4"].includes(strValue[length - 1]) ||
    (length >= 2 && strValue[length - 2]) === "1"
  ) {
    return `${value} ${secondForm}`;
  } else {
    return `${value} ${thirdForm}`;
  }
}

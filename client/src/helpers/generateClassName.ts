import classNames from "classnames";

export function generateClassName(...args: classNames.ArgumentArray) {
  return classNames(...args);
}

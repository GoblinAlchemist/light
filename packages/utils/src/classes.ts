const consecutiveSpace = / {2,}/;

/**
 * Removes extra whitespace in class strings.
 * @param {string} classString The string to be trimmed
 * @returns {string} Clean class string
 */
export const stripClassWhitespace = (classString: string): string => {
  return classString.replace(consecutiveSpace, " ").trimEnd();
};

/**
 * Filters out falsy classes.
 * @param {...(string | false | null)} args The classes to be filtered
 * @return {string} The classes without the falsy values
 */
const classes = (...args: (string | false | null)[]): string => {
  return args.filter((cls) => !!cls).join(" ");
};

export default classes;

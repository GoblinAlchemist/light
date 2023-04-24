/**
 * An action to strip script label's content in Vuew.
 * @param {content} string
 * @returns {string}
 */
const stripScript = (content: string): string => {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : "";
};

export default stripScript;

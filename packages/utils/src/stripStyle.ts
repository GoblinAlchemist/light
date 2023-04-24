/**
 * An action to strip style label's content in Vue.
 * @param {content} string
 * @returns {string}
 */
const stripStyle = (content: string): string => {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : "";
};

export default stripStyle;

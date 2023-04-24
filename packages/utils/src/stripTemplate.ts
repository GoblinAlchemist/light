/**
 * An action to strip template label's content in Vue.
 * @param {content} string
 * @returns {string} the html in vue
 */
const stripTemplate = (content: string): string => {
  content = content.trim();
  if (!content) {
    return content;
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, "").trim();
};

export default stripTemplate;
/**
 * An action to set up light event listeners dynamically.
 * @param {Element} node
 * @param {Array<{ name: string; handler: EventListenerOrEventListenerObject }>} args The event listeners to be registered
 * @returns {{ destroy: () => void }}
 */
const events = (
  node: Element,
  args: Array<{
    name: string;
    handler: EventListenerOrEventListenerObject;
  }>
): {
  destroy: () => void;
} => {
  if (args != null) {
    for (const event of args) {
      node.addEventListener(event.name, event.handler);
    }
  }

  return {
    destroy() {
      if (args != null) {
        for (const event of args) {
          node.removeEventListener(event.name, event.handler);
        }
      }
    },
  };
};

export default events;

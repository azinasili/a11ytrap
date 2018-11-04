import trapKey from './trapKey';

/**
 * Keyboard navigation callback.
 *
 * @func
 * @param {Event} event - Get current target of event
 */
export default function bindKeyPress(event) {
  const arrowKeys = this.settings.enableArrowKeys
    && (event.which === 37
        || event.which === 38
        || event.which === 39
        || event.which === 40);

  if ((event.which === 9 || arrowKeys) && !this.isDestroyed) {
    trapKey.call(this, event);
  }
}

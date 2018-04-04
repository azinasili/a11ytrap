/**
 * Trap keys.
 *
 * @func
 */
export default function trapKeys(event) {
  event.preventDefault();

  const arrowKeys =
    this.settings.enableArrowKeys
    && (event.which === 37 || event.which === 38);

  if (event.shiftKey || arrowKeys) {
    this.focusPrevious();
  } else if (!event.shiftKey) {
    this.focusNext();
  }
}

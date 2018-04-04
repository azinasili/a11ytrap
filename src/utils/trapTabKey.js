/**
 * Trap focus within modal.
 *
 * @func
 */
export default function trapTabKey(event) {
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

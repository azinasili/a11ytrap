/**
 * Reset currentFocusedIndex to the activeElement.
 *
 * @func
 */
export default function update() {
  this.activeElement = document.activeElement;
  this.activeElementIndex = this.elements.indexOf(this.activeElement);
}

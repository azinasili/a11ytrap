import defaults from './defaults';
import focusableElements from './utils/focusableElements';
import update from './utils/update';
import bindKeyPress from './utils/bindKeyPress';

export default class A11yTrap {
  constructor(target, options = {}) {
    const container =
      (target === document || target === document.body)
        ? target
        : document.querySelector(target);

    this.settings = Object.assign({}, defaults, options);
    this.elements = [...container.querySelectorAll(focusableElements)];
    this.activeElement = null;
    this.activeElementIndex = null;
    this.isDestroyed = false;
  }

  /**
   * Initialize A11yModal.
   *
   * @method
   */
  init() {
    this.isDestroyed = false;

    this.elements.forEach((a11ytrapElement) => {
      if (a11ytrapElement.hasAttribute('a11ytrap-element')) {
        a11ytrapElement.setAttribute('tabindex', '0');
      }
    });

    if (
      this.settings.focusOnElement
      && this.elements.indexOf(this.settings.focusOnElement)
    ) {
      const focusOnElementIndex = this.elements.indexOf(this.settings.focusOnElement);
      this.focusElement(focusOnElementIndex);
    }

    if (this.settings.focusOnLastElement) {
      this.focusElement(this.elements.length - 1);
    }

    if (this.settings.focusOnFirstElement) {
      this.focusElement(0);
    }

    document.addEventListener('keydown', event => bindKeyPress.call(this, event), false);

    return this;
  }

  /**
   * Remove all and events.
   *
   * @method
   */
  destroy() {
    this.isDestroyed = true;
    this.activeElement = null;
    this.activeElementIndex = null;
    this.elements.forEach((a11ytrapElement) => {
      if (a11ytrapElement.hasAttribute('a11ytrap-element')) {
        a11ytrapElement.removeAttribute('tabindex');
      }
    });

    document.removeEventListener('keydown', bindKeyPress);

    return this;
  }

  // Focus on element
  focusElement(index = this.activeElementIndex) {
    this.elements[index].focus();
    update.call(this);

    return this;
  }

  // Check index of element and move to previous element
  focusPrevious() {
    update.call(this);
    this.activeElementIndex -= 1;

    if (this.activeElementIndex < 0) {
      this.activeElementIndex = this.elements.length - 1;
    }

    this.focusElement(this.activeElementIndex);

    return this;
  }

  // Check index of element and move to next element
  focusNext() {
    update.call(this);
    this.activeElementIndex += 1;

    if (this.activeElementIndex >= this.elements.length) {
      this.activeElementIndex = 0;
    }

    this.focusElement(this.activeElementIndex);

    return this;
  }
}

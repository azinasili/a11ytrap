# A11yTrap
Trap keyboard navigation within a component. A11yTrap makes it easy to add accessibility support for modals, dropdowns and other web components.

[DEMO](https://codepen.io/azinasili/pen/MVBPxL?editors=1010)

## Installation
With [NPM](https://www.npmjs.com/package/a11ytrap):

```bash
npm install a11ytrap --save
```

With [Bower](https://bower.io/):

```bash
bower install a11ytrap --save
```

Or include A11yTrap directly:

```html
<script src="/path/to/a11ytrap.js"></script>
```


## Usage
Import A11yTrap and configure a component (all options with default values are shown).

```javascript
import A11yTrap from 'a11ytrap';

const MyComponent = new A11yTrap('.MyComponent', {
  enableArrowKeys: false,
  focusOnElement: null,
  focusOnFirstElement: false,
  focusOnLastElement: false,
});

MyComponent.init();
```

A11yTrap will now handle focus management for your component.

By default A11yTrap will include all focusable elements into it's focus management.
To add a custom element into the trap add `tabindex="0"` or `a11ytrap-element` attribute
to your element's markup.


### Configuration options
#### enableArrowKeys
**Type:** `Boolean` **Default:** `false`

**Usage:** Allow arrow keys to navigate component.

#### focusOnElement
**Type:** `Element` **Default:** `null`

**Usage:** Begin focus management on a specific focusable element in component.

#### focusOnFirstElement
**Type:** `Boolean` **Default:** `false`

**Usage:** Begin focus management on first focusable element of component.

#### focusOnLastElement
**Type:** `Boolean` **Default:** `false`

**Usage:** Begin focus management on last focusable element of component.

*Note: If more than one option is being used A11yTrap will default to focusOnFirstElement.*


### Methods
#### init()
**Usage:** Creates new instance of A11yTrap.

#### destroy()
**Usage:** Kills the instance of A11yTrap.

#### focusElement(index)
**Usage:** Focus on a element within component.

#### focusPrevious()
**Usage:** Focus on previous element.

#### focusNext()
**Usage:** Focus on next element.


## Todo
- [ ] Add tests
- [ ] Properly handle series of radio inputs
- [ ] Fix issue when destroying and re-enabling A11yTrap
- [x] Enable arrow key control
- [x] Enable custom elements

## License
MIT License

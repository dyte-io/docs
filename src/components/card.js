/**
 * CardGrid
 */
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      --gap: 2rem;
      --colmin: 24ch;
    }
    :host([hidden]) {
      display: none;
    }
    *, *::after, *::before {
      box-sizing: border-box;
    }
    slot {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--colmin), 1fr));
      grid-gap: var(--gap);
      padding: var(--gap);
    }
  </style>
  <slot></slot>
`;

class CardGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

}

customElements.define('card-grid', CardGrid);

/**
 * CardItem
 */
const template$1 = document.createElement('template');
template$1.innerHTML = `
  <style>
    :host {
      display: block;
      contain: content;
      overflow: hidden;
      position: relative;
      border-radius: 0.25rem;
      box-shadow: 0 3px 5px -3px rgba(0, 0, 0, 0.2);
      transition: filter .1s ease-in, box-shadow .1s ease-in, transform .1s ease-in;
    }
    :host([hidden]) {
      display: none;
    }
    :host(:hover),
    :host(:focus) {
      filter: brightness(105%);
      box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
      transform: translate(0, -1px);
    }
    *, *::after, *::before {
      box-sizing: border-box;
    }
  </style>
  <slot></slot>
`;

class CardItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template$1.content.cloneNode(true));
  }

  connectedCallback() {
    if (!this.hasAttribute('tabindex')) this.setAttribute('tabindex', 0);
  }

}

customElements.define('card-item', CardItem);

export { CardGrid, CardItem };

import { LitElement, html } from "lit-element";

class LitInput extends LitElement {
  static get properties() {
    return {
      value: { type: String },
    };
  }

  dispatchInput(ev) {
    this.dispatchEvent(new CustomEvent("onInput", { detail: ev.target.value }));
  }

  render() {
    return html`
      <input type="text" value="${this.value}" @input="${this.dispatchInput}" />
    `;
  }
}

try {
  customElements.define("lit-input", LitInput);
} catch (e) {}

import { LitElement, html, css } from "lit-element";

class GridWithSlots extends LitElement {
  static get styles() {
    return css`
      .grid {
        display: grid;
        grid-template-columns: 1f 1f;
      }
    `;
  }
  render() {
    return html` <div class="grid">
      <div>
        <p>slot 1</p>
        <slot name="1"></slot>
      </div>
      <div>
        <p>slot 2</p>
        <slot name="2"></slot>
      </div>
      <div>
        <p>slot 3</p>
        <slot name="3"></slot>
      </div>
      <div>
        <p>slot 4</p>
        <slot name="4"></slot>
      </div>
    </div>`;
  }
}

customElements.define("grid-with-slots", GridWithSlots);

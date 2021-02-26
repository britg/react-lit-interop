import React, { useState } from "react";
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

export function SlotDemo() {
  const [slotNum, setSlotNum] = useState(1);

  return (
    <div>
      <h1>Changing slot content dynamically</h1>
      <p>
        Clicking the button bellow should change the content to the nth slot via
        react <code>setState</code>
      </p>

      <button onClick={() => setSlotNum((slotNum % 4) + 1)}>Change slot</button>

      <grid-with-slots>
        <div slot={slotNum}>Content in slot {slotNum}</div>
      </grid-with-slots>
    </div>
  );
}

export default {
  title: "Slots",
  component: SlotDemo,
};

// export const ChangeSlotContent = (args) => <SlotDemo {...args} />;

// export const Demo = Template.bind({});

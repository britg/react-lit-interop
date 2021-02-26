import { LitElement, html } from "lit-element";
import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import WorksAsIntended from "./WorksAsIntended.findings.mdx";

export default {
  title: "State",
};

class LitState extends LitElement {
  static get properties() {
    return {
      value: { type: Number },
      someProp: { type: String },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.value) {
      this.value = 0;
    }
    setInterval(() => {
      this.value++;
    }, 1000);
  }

  render() {
    return html`
      <div>
        Prop ${this.someProp}. Internal web component state: ${this.value}
      </div>
    `;
  }
}

try {
  customElements.define("lit-state", LitState);
} catch (e) {}

function ReactInternalState({ someProp }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setValue((value) => value + 1);
    }, 1000);
  }, []);

  return (
    <div>
      Prop {someProp}. Internal React state: {value}
    </div>
  );
}

export function InternalState() {
  const [someProp, setSomeProp] = useState(Math.random());

  return (
    <div className="example">
      <div>
        <h1>Is internal state maintained with React re-render?</h1>
        <p>
          Clicking the button should change a prop of the web component but its
          state should be maintained.
        </p>

        <button onClick={() => setSomeProp(Math.random())}>Update prop</button>
        <br />
        <br />

        <ReactInternalState someProp={someProp} />
        <lit-state someProp={someProp} />
      </div>

      <div>
        <WorksAsIntended />
      </div>
    </div>
  );
}

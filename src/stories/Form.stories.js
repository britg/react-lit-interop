import { LitElement, html } from "lit-element";
import React, { useState, useLayoutEffect, useRef } from "react";
import ManagedFormInputFindings from "./ManagedFormInput.findings.mdx";
import ButtonsFindings from "./Buttons.findings.mdx";
import "./LitInput";

export default {
  title: "Form",
};

export function Inputs() {
  const [value, setValue] = useState("placeholder");
  const inputRef = useRef();

  useLayoutEffect(() => {
    const { current } = inputRef;

    const handleChange = (ev) => {
      setValue(ev.detail);
    };
    current.addEventListener("onInput", handleChange);
    return () => current.removeEventListener("onInput", handleChange);
  });

  return (
    <div className="example">
      <div>
        <h1>Controlled Form Input</h1>
        <p>
          Typing in the input below should update both the input and the
          react-controlled input value below.
        </p>

        <div>
          <h4>
            Traditional React event binding, e.g. <code>onChange=</code>
          </h4>

          <p>Input value: {value}</p>
          <form>
            <lit-input value={value} onChange={(e) => setValue(e.target.value)} />
          </form>
        </div>

        <div>
          <h4>Custom Event</h4>
          <p>Input value: {value}</p>
          <form>
            <lit-input ref={inputRef} value={value} />
          </form>
        </div>
      </div>
      <div>
        <ManagedFormInputFindings />
      </div>
    </div>
  );
}

class LitButton extends LitElement {
  render() {
    return html`<button>Web component wrapped button</button>`;
  }
}

try {
  customElements.define("lit-button", LitButton);
} catch (e) {}

export function Buttons() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="example">
      <div>
        <h1>Button Events</h1>
        <p>
          The button below is a simple web components that renders a button with
          a bound onClick handler
        </p>

        <p>Click count: {clickCount}</p>
        <lit-button onClick={() => setClickCount(clickCount + 1)} />
      </div>
      <div><ButtonsFindings /></div>
    </div>
  );
}

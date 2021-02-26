import React, { useState, useLayoutEffect, useRef } from "react";
import ManagedFormInputFindings from "./ManagedFormInput.findings.mdx";
import "./LitInput";

export default {
  title: "Form",
};

export function ManagedFormInput() {
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
        <p>Input value: {value}</p>
        <form>
          <lit-input ref={inputRef} value={value} />
        </form>
      </div>
      <div>
        <ManagedFormInputFindings />
      </div>
    </div>
  );
}

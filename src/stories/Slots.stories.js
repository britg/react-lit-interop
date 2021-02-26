import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import WorksAsIntended from "./WorksAsIntended.findings.mdx";
import "./GridWithSlots";

export default {
  title: "Slots",
};

export function DynamicSlotContent() {
  const [slotNum, setSlotNum] = useState(1);

  return (
    <div className="example">
      <div>
        <h1>Changing slot content dynamically</h1>
        <p>
          Clicking the button bellow should change the content to the nth slot
          via react <code>setState</code>
        </p>

        <button onClick={() => setSlotNum((slotNum % 4) + 1)}>
          Change slot
        </button>

        <grid-with-slots>
          <div slot={slotNum}>Content in slot {slotNum}</div>
        </grid-with-slots>
      </div>

      <div>
        <WorksAsIntended />
      </div>
    </div>
  );
}

export function SlotContentAsChildren() {
  const [slotNum, setSlotNum] = useState(1);
  return (
    <div className="example">
      <div>
        <h1>Rendering child content into a slot</h1>
        <p>
          Clicking the button bellow should change the content to the nth slot
          via react <code>setState</code>
        </p>
        <button onClick={() => setSlotNum((slotNum % 4) + 1)}>
          Change slot
        </button>
        <SlotContentAsChildrenHost>
          <div slot={slotNum}>Content in slot {slotNum}</div>
        </SlotContentAsChildrenHost>
      </div>
      <div>
        <WorksAsIntended />
      </div>
    </div>
  );
}

function SlotContentAsChildrenHost({ children }) {
  return <grid-with-slots>{children}</grid-with-slots>;
}

let prevRef;
export function MaintainingRefs() {
  const [slotNum, setSlotNum] = useState(1);
  const [same, setSame] = useState(true);

  const slottedRef = useRef();

  useLayoutEffect(() => {
    setSame(prevRef === slottedRef.current);
  }, [slotNum]);

  useLayoutEffect(() => {
    prevRef = slottedRef.current;
    setSame(prevRef === slottedRef.current);
  }, []);

  return (
    <div className="example">
      <div>
        <h1>Are refs maintained when changing slots?</h1>
        <p>
          Clicking the button should change the slot of the content, but the ref
          should remain the same.
        </p>

        <p>Ref maintained: {same ? "same" : "different"}</p>

        <button onClick={() => setSlotNum((slotNum % 4) + 1)}>
          Change slot
        </button>

        <grid-with-slots>
          <div ref={slottedRef} slot={slotNum}>
            Content in slot {slotNum}
          </div>
        </grid-with-slots>
      </div>

      <div>
        <WorksAsIntended />
      </div>
    </div>
  );
}

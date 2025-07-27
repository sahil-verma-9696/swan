import React, { useRef, useEffect } from "react";

export default function withClickOutside(WrappedComponent) {
  return function ClickOutsideWrapper(props) {
    const { onClose, ...rest } = props;
    const ref = useRef(null);

    useEffect(() => {
      function handleClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClose?.();
        }
      }

      document.addEventListener("mousedown", handleClick);
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, [onClose]);

    return (
      <div className="fixed top-0 left-0 w-screen h-screen z-[50] bg-[rgba(31,41,55,0.5)] dark:bg-[rgba(31,41,55,0.5)] flex justify-center items-start px-4 py-10 overflow-auto">
        <div ref={ref}>
          <WrappedComponent {...rest} onClose={onClose} />
        </div>
      </div>
    );
  };
}

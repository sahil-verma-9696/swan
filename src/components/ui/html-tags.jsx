import React from "react";
import cn from "../../utility/cn";

/** @type {React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>} */
export const Button = ({
  type = "button",
  className = [],
  children,
  ...props
}) => (
  <button
    type={type}
    {...props}
    className={cn(...className, "cursor-pointer border p-2 rounded-md")}
  >
    {children}
  </button>
);

/** @type {React.FC<React.SpanHTMLAttributes<HTMLSpanElement>>} */
export const Span = ({ className = [], children, ...props }) => (
  <span {...props} className={cn(...className)}>
    {children}
  </span>
);

/** @type {React.FC<React.DivHTMLAttributes<HTMLDivElement>>} */
export const Div = ({ className = [], children, ...props }) => (
  <div {...props} className={cn(...className)}>
    {children}
  </div>
);

/** @type {React.FC<React.InputHTMLAttributes<HTMLInputElement>>} */
export const Input = ({ className = [], children, ...props }) => (
  <input
    {...props}
    className={cn(
      ...className,
      "border p-1 rounded-md px-2",
      "dark:border-gray-600"
    )}
  >
    {children}
  </input>
);

/** @type {React.FC<React.NavHTMLAttributes<HTMLNavElement>>} */
export function Navigations({ className = [], children }) {
  return <nav className={cn(...className)}>{children}</nav>;
}

/** @type {React.FC<React.ImgHTMLAttributes<HTMLImageElement>>} */
export function Image({ className = [], children, ...props }) {
  return (
    <img {...props} className={cn(...className, "select-none")}>
      {children}
    </img>
  );
}

/** @type {React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>>} */
export function Textarea({ className = [], children, ...props }) {
  return (
    <textarea {...props} className={cn(...className)}>
      {children}
    </textarea>
  );
}

/** @type {React.FC<React.H2HTMLAttributes<HTMLHeadingElement>>} */
export function H2({ className = [], children, ...props }) {
  return (
    <h2 {...props} className={cn(...className)}>
      {children}
    </h2>
  );
}

/** @type {React.FC<React.SectionHTMLAttributes<HTMLSectionElement>>} */
export function Section({ className = [], children, ...props }) {
  return (
    <section {...props} className={cn(...className)}>
      {children}
    </section>
  );
}

/** @type {React.FC<React.PHTMLAttributes<HTMLParagraphElement>>} */
export const P = ({ className = [], children, ...props }) => (
  <p {...props} className={cn(...className)}>
    {children}
  </p>
);

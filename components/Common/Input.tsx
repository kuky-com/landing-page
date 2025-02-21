import React from "react";

interface IProps {
  label?: string;
  placeholder?: string;
  error?: string;
  name: string;
  type?: string;
  className?: string
}
const Input = React.forwardRef<HTMLInputElement, IProps>(
  (
    { label, name, error, type = "text", placeholder, ...rest },
    ref
  ) => {
    return (
      <>
        <div className="sm:mt-0 mt-3">
          {label && (
            <h1 className="md:text-[24px] text-[16px] font-semibold mb-2">
              {label}
            </h1>
          )}

          <input
            id={name}
            name={name}
            ref={ref}
            type={type}
            className="border border-solid border-[#726E70] rounded-[15px] sm:h-[55px] h-12  w-full placeholder:text-[16px] placeholder:text-[#949494] indent-5"
            placeholder={placeholder || ""}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            aria-invalid={error ? "true" : "false"}
            {...rest}
            
          />
          {error && (
            <p className="mt-1 text-xs text-red-500 text-start">{error}</p>
          )}
        </div>
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;

import React from 'react'

export default function FloatingLabelInput({ type, name, children, value, handleChange }) {
  const [active, setActive] = React.useState(false);

  function handleActivation(e) {
    setActive(!!e.target.value);
  }

  return (
    <div className="relative border rounded bg-white text-black border-gray-500 border-opacity-25">
      <input
        className={[
          "outline-none w-full rounded bg-gray-100 text-base transition-all duration-200 ease-in-out py-2 px-4",
          active ? "pt-6" : ""
        ].join(" ")}
        id={name}
        name={name}
        type={type}
        onKeyUp={handleActivation}
        value={value}
        onChange={(e) => { handleChange(e.target.value) }}
      />
      <label
        className={[
          "absolute top-0 left-0 flex items-center text-gray-800 text-opacity-50 py-2 px-4 transition-all duration-200 ease-in-out",
          active ? "text-xs" : "text-sm"
        ].join(" ")}
        htmlFor={name}
      >
        {children}
      </label>
    </div>
  );
}
import React from 'react'

interface CheckboxProps {
  label: string;
}

function Checkbox({ label }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 text-white text-1xl">
      <input type="checkbox" required className="accent-[#0AB4FF]" />
      {label}
    </label>
  );
}

export default Checkbox;

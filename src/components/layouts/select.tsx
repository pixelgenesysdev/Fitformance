import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  id: string;
  fieldicon: IconDefinition;
  required?: boolean;
  options: SelectOption[];
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  id,
  fieldicon,
  required = false,
  options,
  placeholder
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="text-white font-medium text-1xl ml-4">
          {label}
        </label>
      )}

      <div className="flex items-center bg-[#1D1D1D] border border-[#0AB4FF] rounded-full px-4 py-2 mt-2">
        <FontAwesomeIcon icon={fieldicon} className="text-[#0AB4FF] mr-2" />

        <select
          id={id}
          required={required}
          className="w-full bg-transparent pt-1 pb-1 text-white text-1xl focus:outline-none cursor-pointer"
          defaultValue=""
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}

          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-black">
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;

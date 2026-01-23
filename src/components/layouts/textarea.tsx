import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TextAreaProps {
  label: string;
  id: string;
  placeholder?: string;
  fieldicon: IconDefinition;
  required?: boolean;
  rows?: number;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  id,
  placeholder,
  fieldicon,
  required = false,
  rows = 4,
  value = "",
  onChange,
  disabled = false
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="text-white font-medium text-1xl ml-4">
          {label}
        </label>
      )}

      <div className="flex items-start bg-[#1D1D1D] border border-[#0AB4FF] rounded-2xl px-4 py-3 mt-2">
        <FontAwesomeIcon
          icon={fieldicon}
          className="text-[#0AB4FF] mr-2 mt-1"
        />

        <textarea
          id={id}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`w-full bg-transparent text-white text-1xl placeholder-gray-300 focus:outline-none resize-none ${disabled ? "opacity-50 cursor-no-drop" : ""} `}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;

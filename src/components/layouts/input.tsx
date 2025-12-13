import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  fieldicon: IconDefinition;
  required: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, id, placeholder, fieldicon,required }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="text-white font-medium text-1xl ml-4">
          {label}
        </label>
      )}

      <div className="flex items-center bg-[#1D1D1D] border border-[#0AB4FF] rounded-full px-4 py-2 mt-2">
        <FontAwesomeIcon icon={fieldicon} className="text-[#0AB4FF] mr-2" />

        <input
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          id={id}
          placeholder={placeholder}
          className="w-full bg-transparent pt-1 pb-1 text-white text-1xl placeholder-gray-300 focus:outline-none"
          required={required}
        />

        {type === "password" && (
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="text-[#0AB4FF] ml-2 cursor-pointer"
            onClick={() => setShowPassword(prev => !prev)}
          />
        )}
      </div>
    </div>
  );
};

export default Input;

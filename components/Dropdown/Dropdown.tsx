import React from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onSelect: (option: string) => void;
  disabled?: boolean;
  isOpen: boolean;
  toggleDropdown: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onSelect,
  disabled = false,
  isOpen,
  toggleDropdown,
}) => {
  return (
    <div className="mt-3">
      <label className={`text-sm ${disabled ? 'text-gray-500' : ''}`}>{label}</label>
      <div
        className={`relative h-[46px] w-full rounded-lg  border px-3 max-sm:mb-2 cursor-pointer ${
          disabled
            ? 'modal-style opacity-45 cursor-not-allowed' // Disabled styles
            : ' modal-style border focus-within:border-[#1B5EED4D] focus-within:bg-[#FBFAFC]'
        }`}
        onClick={() => {
          if (!disabled) toggleDropdown();
        }}
      >
        <div className="flex h-[46px] items-center justify-between">
          <span className={`text-sm ${disabled ? 'text-gray-500' : ''}`}>
            {value || `Pending, Confirmed, Delivered, or Cancelled ${label}`}
          </span>
          <svg
  className={`w-4 h-4 transition-transform ${
    isOpen ? 'rotate-180' : ''
  } ${disabled ? 'text-gray-500' : 'text-black'}`}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="currentColor"
>
  <path
    fillRule="evenodd"
    d="M10 12a1 1 0 01-.707-.293l-6-6a1 1 0 011.414-1.414L10 9.586l5.293-5.293A1 1 0 0117.707 5.293l-6 6A1 1 0 0110 12z"
    clipRule="evenodd"
  />
</svg>

        </div>
        {isOpen && !disabled && (
          <div className="absolute top-[50px] left-0 w-full z-10 rounded-lg modal-style border border-[#FFFFFF1A] shadow-lg">
            {options.map((option) => (
              <div
                key={option}
                className={`px-3 py-2 text-sm  hover:bg-[#1B5EED4D] cursor-pointer ${
                  value === option ? 'bg-[#1B5EED4D]' : ''
                }`}
                onClick={() => {
                  onSelect(option);
                  toggleDropdown(); // Close the dropdown after selection
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

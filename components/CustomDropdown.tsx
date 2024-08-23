import { useState } from 'react';
import Image from 'next/image'

interface Option {
    value: string;
    label: string;
}

interface CustomDropdownProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}

const CustomDropdown = ({ options, value, onChange, placeholder }: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    // Use the placeholder as the default value if no option is selected
    const displayValue = value ? options.find(option => option.value === value)?.label : placeholder;

    const handleOptionClick = (option: Option) => {
        onChange(option.value);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                className={`w-full px-5 py-4 text-left border border-white rounded-lg shadow-inset-custom text-base font-roboto font-light leading-6 text-[rgba(102,102,102,1)] bg-white ${!value && 'text-[rgba(170,170,170,1)]' // Light gray for placeholder text
                    }`}
                onClick={() => setIsOpen(!isOpen)}
                type="button"
            >
                {displayValue}
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <Image
                        src="arrow-down.svg"
                        alt="select indicator"
                        width={10}
                        height={10}
                    />
                </span>
            </button>
            {isOpen && (
                <ul className="absolute w-full bg-white border border-white mt-1 rounded-lg shadow-lg z-10">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="px-5 py-4 text-left cursor-pointer hover:bg-gray-200 text-[rgba(102,102,102,1)]"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;

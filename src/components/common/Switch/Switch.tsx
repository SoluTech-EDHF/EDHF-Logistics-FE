interface SwitchProps {
  id: string;
  label?: string; // Optional label
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch = ({ id, label, checked, onChange }: SwitchProps) => {
  return (
    <label
      htmlFor={id}
      className="inline-flex items-center space-x-3 cursor-pointer select-none"
    >
      {/* Optional Label using your Outfit font */}
      {label && (
        <span className="text-sm font-medium text-gray-900 font-outfit">
          {label}
        </span>
      )}

      <div className="relative inline-flex items-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />

        {/* The Switch Track */}
        <div
          className="w-11 h-6 bg-gray-300 rounded-full peer 
          peer-focus:ring-2 peer-focus:ring-gray-200
          peer-checked:bg-[#262626] 
          after:content-[''] after:absolute after:top-0.5 after:left-0.5 
          after:bg-white after:border-gray-300 after:border after:rounded-full 
          after:h-5 after:w-5 after:transition-all 
          peer-checked:after:translate-x-full peer-checked:after:border-white"
        ></div>
      </div>
    </label>
  );
};

export default Switch;

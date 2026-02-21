import { formartTime } from "@/utils";
import { useRef } from "react";

interface TimeInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TimeInput = ({ value, onChange }: TimeInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.showPicker();
  };

  return (
    <div
      className="relative flex items-center cursor-pointer h-9.5 w-31"
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 opacity-0 pointer-events-none"
      />
      <div className="flex items-center h-full w-full bg-[#EDEDED] rounded-md justify-center">
        <span className="text-lg font-normal">
          {value ? formartTime(value) : "--:-- --"}
        </span>
      </div>
    </div>
  );
};

export default TimeInput;

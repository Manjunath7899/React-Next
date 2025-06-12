import { ArrowDownAZ } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface SelectDropdownProps {
  options: any[];
  handleSort: (id: string) => void;
  setOpen: (value: boolean) => void;
  open: boolean;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  handleSort,
  setOpen,
  open,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-center items-center px-2 py-1 bg-indigo-600 text-white rounded-full cursor-pointer"
      >
        <ArrowDownAZ className="w-6 h-8" />
      </div>
      {open && (
        <div className="absolute right-15 w-auto h-auto bg-white shadow rounded p-2">
          {options.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => handleSort(item.id)}
                className="cursor-pointer text-indigo-600 hover:bg-gray-500 hover:text-white px-4 py-1 rounded"
              >
                <span className="text-sm">{item.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

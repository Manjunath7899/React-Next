import { ChevronDown, ChevronUp } from "lucide-react";
import React, { SetStateAction, useEffect, useRef, useState } from "react";

interface Options {
  id: number;
  label: string;
}

type Size = "sm" | "md" | "lg" | "xl";

const sizeClassMap: Record<
  Size,
  { width: string; height: string; iconTop: string }
> = {
  sm: { width: "w-40", height: "h-6", iconTop: "top-[-2px]" },
  md: { width: "w-64", height: "h-8", iconTop: "top-[2px]" },
  lg: { width: "w-80", height: "h-10", iconTop: "top-1.5" },
  xl: { width: "w-98", height: "h-12", iconTop: "top-2.5" },
};

interface SelectDropdownProps {
  options: Options[];
  size?: Size;
  placeholder?: string;
  multiSelect?: boolean;
  selected: Options[];
  setSelected: React.Dispatch<SetStateAction<Options[]>>;
  disabled?: boolean;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  size = "md",
  placeholder,
  multiSelect,
  selected,
  setSelected,
  disabled = false,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { width, height, iconTop } = sizeClassMap[size];

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSelect = (currentItem: Options) => {
    if (!multiSelect) {
      if (selected.length === 1 && selected[0].id === currentItem.id) return;
      setSelected([currentItem]);
      setOpen(false);
    } else {
      const alreadySelectedItem = selected.some(
        (item) => item.id === currentItem.id
      );
      if (alreadySelectedItem) {
        setSelected((prevState) =>
          prevState.filter((item) => item.id !== currentItem.id)
        );
      } else {
        setSelected((prevState) => [...prevState, currentItem]);
      }
    }
  };

  const getDisplaySelectedItem = () => {
    if (!selected || selected.length === 0) return "";
    if (!multiSelect) {
      return selected[0].label;
    } else {
      const labelBase = placeholder?.replace(/^Select\s+/i, "");
      if (selected.length > 0) {
        return `${selected.length} ${labelBase} selected`;
      }
    }
  };

  return (
    <div ref={dropdownRef} className={`relative ${width}`}>
      <div className={`relative w-full`}>
        <input
          readOnly
          disabled={disabled}
          type="text"
          value={getDisplaySelectedItem()}
          placeholder={placeholder}
          onClick={() => {
            if (!disabled) {
              setOpen(!open);
            }
          }}
          className={`border rounded px-2 py-2 outline-none cursor-pointer w-full text-sm ${height}`}
        />
        {open ? (
          <ChevronUp
            size={28}
            className={`absolute ${iconTop} right-2 text-gray-400 cursor-pointer`}
          />
        ) : (
          <ChevronDown
            size={28}
            className={`absolute ${iconTop} right-2 text-gray-400 cursor-pointer`}
          />
        )}
      </div>
      {open && (
        <div className={`${width}`}>
          <ul className="custom-scrollbar absolute w-full bg-white border mt-0.5 px-2 border-gray-300 shadow rounded max-h-40 overflow-auto">
            {options &&
              options.length > 0 &&
              options.map((item) => {
                return (
                  <div key={item.id} className="flex justify-between px-2 py-1">
                    <span className="font-medium text-md text-gray-600 cursor-pointer">
                      {item.label}
                    </span>
                    <input
                      type={multiSelect ? "checkbox" : "radio"}
                      name="dropdown-single-select"
                      checked={selected.some((i) => i.id === item.id)}
                      onChange={() => handleSelect(item)}
                      className="mr-2.5 cursor-pointer"
                    />
                  </div>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;

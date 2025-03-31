"use client";

import React from "react";
import { Controle, FormDataValue } from "@/app/types/FormTypes";

interface FormControlesProps {
  controles: Controle[];
  formData: FormDataValue;
  setFormData: React.Dispatch<React.SetStateAction<FormDataValue>>;
}

const FormControles: React.FC<FormControlesProps> = ({
  controles,
  formData,
  setFormData,
}) => {
  return (
    <div className="">
      {controles.map((controleItem, index) => (
        <div key={index} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {controleItem.label}
          </label>
          <input
            type={controleItem.type}
            placeholder={controleItem.placeholder}
            name={controleItem.name}
            id={controleItem.name}
            value={formData[controleItem.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [controleItem.name]: event.target.value,
              })
            }
            className="border shadow rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
          />
        </div>
      ))}
    </div>
  );
};

export default FormControles;

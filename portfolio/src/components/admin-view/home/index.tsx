import { Controle, FormDataValue } from "@/app/types/FormTypes";
import FormControles from "@/components/form-controles";
import React, { useState } from "react";

interface AdminHomeViewProps {
  formData: FormDataValue;
  setFormData: React.Dispatch<React.SetStateAction<FormDataValue>>;
  handleSaveData: () => void;
}

const controles: Controle[] = [
  {
    name: "heading",
    type: "text",
    placeholder: "Enter the heading text",
    label: "Enter the heading text",
  },
  {
    name: "summary",
    type: "text",
    placeholder: "Enter carrer summary",
    label: "Enter carrer summary",
  },
];

const AdminHomeView: React.FC<AdminHomeViewProps> = ({
  formData,
  setFormData,
  handleSaveData,
}) => {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControles
          controles={controles}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={handleSaveData}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px] cursor-pointer"
        >
          Add Info
        </button>
      </div>
    </div>
  );
};

export default AdminHomeView;

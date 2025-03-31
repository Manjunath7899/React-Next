import { FormDataValue } from "@/app/types/FormTypes";
import FormControles from "@/components/form-controles";
import React from "react";

interface AdminEducationViewProps {
  formData: FormDataValue;
  setFormData: React.Dispatch<React.SetStateAction<FormDataValue>>;
  handleSaveData: () => void;
}

const controles = [
  {
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Enter Degree Name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "Enter College Name",
  },
];

const AdminEducationView: React.FC<AdminEducationViewProps> = ({
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
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
};

export default AdminEducationView;

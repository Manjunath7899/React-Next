import { FormDataValue } from "@/app/types/FormTypes";
import FormControles from "@/components/form-controles";
import React from "react";

interface AdminAboutViewProps {
  formData: FormDataValue;
  setFormData: React.Dispatch<React.SetStateAction<FormDataValue>>;
  handleSaveData: () => void;
}

const controles = [
  {
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "About Me",
  },
  {
    name: "noofprojects",
    placeholder: "No of projects",
    type: "text",
    label: "Enter no of projects",
  },
  {
    name: "yearofexperience",
    placeholder: "No of experience",
    type: "text",
    label: "Enter no of experience",
  },
  {
    name: "noofclients",
    placeholder: "No of clients",
    type: "text",
    label: "Enter no of clients",
  },
  {
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "Skills",
  },
];

const AdminAboutView: React.FC<AdminAboutViewProps> = ({
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

export default AdminAboutView;

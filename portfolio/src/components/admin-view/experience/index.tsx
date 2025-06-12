import { FormDataValue } from "@/app/types/FormTypes";
import FormControles from "@/components/form-controles";
import React from "react";

interface AdminExperienceViewProps {
  formData: FormDataValue;
  setFormData: React.Dispatch<React.SetStateAction<FormDataValue>>;
  handleSaveData: () => void;
}

const controles = [
  {
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "Position",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
  {
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Location",
  },
  {
    name: "jobprofile",
    placeholder: "Job Profile",
    type: "text",
    label: "Job Profile",
  },
];

const AdminExperienceView: React.FC<AdminExperienceViewProps> = ({
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

export default AdminExperienceView;

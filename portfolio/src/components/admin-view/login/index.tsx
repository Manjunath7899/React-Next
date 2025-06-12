"use client";

import { Controle, FormDataValue } from "@/app/types/FormTypes";
import FormControles from "@/components/form-controles";
import React, { SetStateAction } from "react";

interface LoginProps {
  formData: FormDataValue;
  setFormData: React.Dispatch<SetStateAction<FormDataValue>>;
  handleLogin: () => void;
}

const controles: Controle[] = [
  {
    name: "username",
    type: "text",
    placeholder: "Enter username",
    label: "Enter username",
  },
  {
    name: "password",
    type: "text",
    placeholder: "Enter password",
    label: "Enter password",
  },
];

const Login: React.FC<LoginProps> = ({
  formData,
  setFormData,
  handleLogin,
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
          onClick={handleLogin}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px] cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

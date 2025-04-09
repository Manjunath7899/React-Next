"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormDataValue } from "@/app/types/FormTypes";
import FormControles from "@/components/form-controles";

const controles: any[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Message",
    name: "message",
    type: "text",
    placeholder: "Enter your message",
  },
];

const ClientContactView = () => {
  const headingContactText = "Contact Me";

  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormDataValue>({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current!, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error: any) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      className="max-w-screen-2xl mt-24 mb-6 px-6 max-auto ml-30"
      id="contact"
    >
      <div className="w-full grid grid-flow-row grid-row-2">
        <div className="flex justify-center items-center">
          <h1>
            {headingContactText.split(" ").map((item: any, index: number) => {
              return (
                <span
                  key={index}
                  className={`${
                    index === 1 ? "text-green-600" : "text-[#000000]"
                  } text-5xl font-medium`}
                >
                  {item}{" "}
                </span>
              );
            })}
          </h1>
        </div>
        <div className="mt-24 flex flex-col ml-[10%]">
          <form ref={form} onSubmit={sendEmail}>
            <FormControles
              controles={controles}
              formData={formData}
              setFormData={setFormData}
              getInputClassName={(control) =>
                `w-[100%] px-4 py-3 border rounded-md ${
                  control.name === "user_email"
                    ? "border-green-600"
                    : "bg-gray-100 border-green-600"
                } focus:ring-2 focus:ring-green-600`
              }
            />
            <input
              onClick={() => setFormData({
                name: "",
                email: "",
                message: "",
              })}
              type="submit"
              value="Send"
              className="bg-green-600 text-white px-4 py-2 rounded mt-4 cursor-pointer hover:bg-blue-600"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientContactView;

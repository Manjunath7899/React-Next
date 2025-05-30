"use client";

import { useEffect, useState } from "react";
import AnimationWrapper from "../animationWrapper";
import { addData } from "@/services";
import { FormDataValue } from "@/app/types/FormTypes";

const controls = [
  {
    name: "name",
    placeholder: "John",
    type: "text",
    label: "Name",
  },
  {
    name: "email",
    placeholder: "john@abc.com",
    type: "email",
    label: "Email",
  },
  {
    name: "message",
    placeholder: "Enter your message",
    type: "text",
    label: "Message",
  },
];

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export default function ClientContactView() {
  const [formData, setFormData] = useState<FormDataValue>(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  async function handleSendMessage() {
    const res = await addData("contact", formData);
    console.log(res, 'contact-res');

    if (res && res.success) {
      setFormData(initialFormData)
      setShowSuccessMessage(true)
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 1500)
    }

  }, [showSuccessMessage])

  const isValidForm = () => {
    return formData &&
      formData.name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
      ? true
      : false;
  };

  console.log(isValidForm(), 'isValidForm()');

  return (
    <div
      className="max-w-screen-xl mt-24 max-sm:mt-0 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="contact"
    >
      <AnimationWrapper className={"py-6"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 max-sm:mb-0 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"Contact Me".split(" ").map((item, index) => (
              <span
                key={index}
                className={`${index === 1 ? "text-green-600" : "text-[#000]"}`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
        </div>
      </AnimationWrapper>
      <div className="text-gray-500 relative">
        <div className="container px-5">
          <div className="w-full">
            <div className="flex flex-wrap -m-2">
              {controls.map((controlItem, index) =>
                controlItem.name === "message" ? (
                  <div key={index} className="p-2 w-full">
                    <div className="relative">
                      <label className="text-lg font-semibold text-gray-500">
                        {controlItem.label}
                      </label>
                      <textarea
                        placeholder="Got a cool project? Let’s talk!"
                        id={controlItem.name}
                        name={controlItem.name}
                        value={formData[controlItem.name]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [controlItem.name]: e.target.value,
                          })
                        }
                        className="w-full border-green-600 border-[2px] bg-[#ffffff] rounded  h-32 text-base outline-none text-[#000000] py-1 px-3 resize-none leading-6"
                      ></textarea>
                    </div>
                  </div>
                ) : (
                  <div key={index} className="p-2 w-full">
                    <div className="relative">
                      <label className="text-lg font-semibold text-gray-500">
                        {controlItem.label}
                      </label>
                      <input
                        id={controlItem.name}
                        placeholder={controlItem.placeholder}
                        name={controlItem.name}
                        value={formData[controlItem.name]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [controlItem.name]: e.target.value,
                          })
                        }
                        className="w-full border-green-600 border-[2px] bg-[#ffffff] rounded  text-base outline-none text-[#000000] py-2 px-3 leading-6"
                      />
                    </div>
                  </div>
                )
              )}
              {
                showSuccessMessage && <p className="text-[14px] font-bold my-[8px]">Your message is successfully delivered !</p>
              }
              <div className="p-2 w-full">
                <button
                  disabled={!isValidForm()}
                  onClick={handleSendMessage}
                  className="disabled:opacity-50 cursor-pointer py-3 lg:py-4 px-12 max-sm:px-10 max-sm:text-xl max-sm:mb-10 lg:px-16 text-white-500 font-semibold rounded-lg text-2xl tracking-widest bg-green-500 outline-none"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

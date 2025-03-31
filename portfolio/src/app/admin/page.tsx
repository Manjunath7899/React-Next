"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import AdminProjectView from "@/components/admin-view/project";
import React, { useEffect, useState } from "react";
import { FormDataValue } from "../types/FormTypes";
import { addData, getData, login, updateData } from "@/services";
import Login from "@/components/admin-view/login";

const initialHomeViewFormData: FormDataValue = {
  heading: "",
  summary: "",
};

const initialAboutViewFormData: FormDataValue = {
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};

const initialEducationViewFormData: FormDataValue = {
  degree: "",
  year: "",
  college: "",
};

const initialExperienceViewFormData: FormDataValue = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};

const initialProjectViewFormData: FormDataValue = {
  name: "",
  website: "",
  technologies: "",
  github: "",
};

const initialLoginFormData: FormDataValue = {
  username: "",
  password: "",
};

const AdminView = () => {
  const [currentSelectedTab, setCurrentSelectedTab] = useState<string>("home");
  const [homeViewFormData, setHomeViewFormData] = useState<FormDataValue>(
    initialHomeViewFormData
  );

  const [aboutViewFormData, setAboutViewFormData] = useState<FormDataValue>(
    initialAboutViewFormData
  );

  const [educationViewFormData, setEducationViewFormData] =
    useState<FormDataValue>(initialEducationViewFormData);

  const [experienceViewFormData, setExperienceViewFormData] =
    useState<FormDataValue>(initialExperienceViewFormData);

  const [projectViewFormData, setProjectViewFormData] = useState<FormDataValue>(
    initialProjectViewFormData
  );

  const [allData, setAllData] = useState({});
  const [update, setUpdate] = useState<boolean>(false);
  const [authUser, setAuthUser] = useState<boolean>(false);
  const [loginFormData, setLoginFormData] =
    useState<FormDataValue>(initialLoginFormData);

  const menuItems = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          key={"home"}
          setFormData={setHomeViewFormData}
          handleSaveData={() => handleSaveData("home")}
        />
      ),
    },
    {
      id: "about",
      label: "About",
      component: (
        <AdminAboutView
          key={"about"}
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
          handleSaveData={() => handleSaveData("about")}
        />
      ),
    },
    {
      id: "experience",
      label: "Experience",
      component: (
        <AdminExperienceView
          key={"experience"}
          formData={experienceViewFormData}
          setFormData={setExperienceViewFormData}
          handleSaveData={() => handleSaveData("experience")}
        />
      ),
    },
    {
      id: "education",
      label: "Education",
      component: (
        <AdminEducationView
          key={"education"}
          formData={educationViewFormData}
          setFormData={setEducationViewFormData}
          handleSaveData={() => handleSaveData("education")}
        />
      ),
    },
    {
      id: "project",
      label: "Project",
      component: (
        <AdminProjectView
          key={"project"}
          formData={projectViewFormData}
          setFormData={setProjectViewFormData}
          handleSaveData={() => handleSaveData("project")}
        />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      component: <AdminContactView key={"contact"} />,
    },
  ];

  async function extractAllData() {
    const response = await getData(currentSelectedTab);

    if (currentSelectedTab === "home" && response && response.data.length) {
      setHomeViewFormData(response.data[0]);
      setUpdate(true);
    }
    if (currentSelectedTab === "about" && response && response.data.length) {
      setAboutViewFormData(response.data[0]);
      setUpdate(true);
    }

    if (response.success) {
      setAllData((prevData) => ({
        ...prevData,
        [currentSelectedTab]: response && response.data,
      }));
    }
  }

  async function handleSaveData(currentSelectedTab: string) {
    const dataMap: any = {
      home: homeViewFormData,
      about: aboutViewFormData,
      education: educationViewFormData,
      experience: experienceViewFormData,
      project: projectViewFormData,
    };

    const response = update
      ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
      : await addData(currentSelectedTab, dataMap[currentSelectedTab]);

    if (response.success) {
      resetFormData();
      extractAllData();
    }
  }

  function resetFormData() {
    setHomeViewFormData(initialHomeViewFormData);
    setAboutViewFormData(initialAboutViewFormData);
    setExperienceViewFormData(initialExperienceViewFormData);
    setEducationViewFormData(initialEducationViewFormData);
    setProjectViewFormData(initialProjectViewFormData);
  }

  useEffect(() => {
    extractAllData();
  }, [currentSelectedTab]);

  useEffect(() => {
    const storedAuthUser = sessionStorage.getItem("authUser");
    if (storedAuthUser) {
      const parsedAuthUser = JSON.parse(storedAuthUser);
      setAuthUser(parsedAuthUser);
    } else {
      setAuthUser(false);
    }
  }, []);

  async function handleLogin() {
    const response = await login(loginFormData);
    if (response) {
      setAuthUser(true);
      sessionStorage.setItem("authUser", JSON.stringify(true));
      setLoginFormData(initialLoginFormData);
    } else {
      alert(response?.message || "Login failed. Please try again.");
      setLoginFormData(initialLoginFormData);
    }
  }

  if (!authUser) {
    return (
      <Login
        formData={loginFormData}
        setFormData={setLoginFormData}
        handleLogin={handleLogin}
        key={"login"}
      />
    );
  }

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-0.5 flex justify-center items-center space-x-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setCurrentSelectedTab(item.id);
              resetFormData();
              setUpdate(false);
            }}
            className="p-4 font-bold text-xl text-black cursor-pointer"
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => {
            setAuthUser(false);
            sessionStorage.removeItem("authUser");
          }}
          className="p-4 font-bold text-xl text-black cursor-pointer"
        >
          Logout
        </button>
      </nav>

      <div className="mt-10 p-10">
        {menuItems.map(
          (item) => item.id === currentSelectedTab && item.component
        )}
      </div>
    </div>
  );
};

export default AdminView;

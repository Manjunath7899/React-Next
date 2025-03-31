import { FormDataValue } from "@/app/types/FormTypes";

export async function addData(currentTab: string, formData: FormDataValue) {
  try {
    const apiResponse = await fetch(`/api/${currentTab}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await apiResponse.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getData(currentTab: string) {
  try {
    const response = await fetch(`/api/${currentTab}/get`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function updateData(currentTab: string, formData: FormDataValue) {
  const apiResponse = await fetch(`api/${currentTab}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const result = await apiResponse.json();
  return result;
}

export async function login(formData: FormDataValue) {
  try {
    const apiResponse = await fetch(`api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await apiResponse.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function extractAllData(currentSection: string) {
  try {
    const apiResponse = await fetch(
      `http://localhost:3000/api/${currentSection}/get`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await apiResponse.json();
    return data && data.data;
  } catch (error) {
    console.log(error);
  }
}

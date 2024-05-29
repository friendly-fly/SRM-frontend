const baseUrl = "http://localhost:8000/api/v1";

const importStudentDetails = async (file) => {
  const uri = baseUrl + "/student/import";
  try {
    const formData = new FormData();

    formData.set("file", file);
    const response = await fetch(uri, {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

const registerStudent = async (formData) => {
  console.log(formData);
  const uri = baseUrl + "/student";
  try {
    const response = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
};
const updateStudent = async (formData, id) => {
  console.log(formData);
  const uri = baseUrl + `/student/${id}`;
  try {
    const response = await fetch(uri, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

const feePayment = async (formData) => {
  const uri = baseUrl + `/payment/add`;
  try {
    const response = await fetch(uri, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

const summary = async () => {
  const uri = baseUrl + "/student/summary";
  try {
    const response = await fetch(uri, {
      method: "GET",
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

const getLastYearStudent = async () => {
  const currentYear = new Date().getFullYear();
  const uri = baseUrl + `/student?year=${currentYear}`;
  try {
    const response = await fetch(uri, {
      method: "GET",
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

const getStudentByBatchAndDepartment = async (batch, department) => {
  const uri = baseUrl + `/student?year=${batch}&department=${department}`;
  try {
    const response = await fetch(uri, {
      method: "GET",
    });
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export {
  importStudentDetails,
  summary,
  getLastYearStudent,
  getStudentByBatchAndDepartment,
  registerStudent,
  updateStudent,
  feePayment,
};

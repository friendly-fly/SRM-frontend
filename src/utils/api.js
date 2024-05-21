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

export { importStudentDetails };

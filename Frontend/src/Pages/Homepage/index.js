window.onload = function () {
  const userRole = localStorage.getItem("userRole");
  const userName = localStorage.getItem("userName");
  const userPicture = localStorage.getItem("userPicture");

  if (userRole) {
    document.getElementById("userName").textContent = userName;
    document.getElementById("userPicture").src = userPicture;
    document.getElementById("name").textContent = userName;
  } else {
    console.log("User unknown");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const storedName = localStorage.getItem("userName");
  if (storedName) {
    nameInput.value = storedName;
    nameInput.disabled = true;
  }
});

const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const periodInput = document.getElementById("period");

function calculateMonths() {
  const startDate = new Date(startDateInput.value);
  const endDate = new Date(endDateInput.value);
  if (startDate && endDate && endDate > startDate) {
    const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = endDate.getMonth() - startDate.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;
    periodInput.value = totalMonths;
  } else {
    periodInput.value = "";
  }
}

startDateInput.addEventListener("change", calculateMonths);
endDateInput.addEventListener("change", calculateMonths);

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(event.target);
  
  const data = {
    regNumber: formData.get("reg-number"),
    name: localStorage.getItem("userName"),
    year: formData.get("year"),
    title: formData.get("title"),
    mobile: formData.get("mobile"),
    section: formData.get("section"),
    internshipObtained: formData.get("internship-obtained"),
    startDate: formData.get("start-date"),
    endDate: formData.get("end-date"),
    period: formData.get("period"),
    companyName: formData.get("company-name"),
    placementSource: formData.get("placement-source"),
    stipend: formData.get("stipend"),
    internshipType: formData.get("internship-type"),
    location: formData.get("location"),
    fileUrl: formData.get("fileUrl"),
  };

  try {
    const response = await fetch("http://localhost:3000/app/students/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Form submitted successfully!");
      event.target.reset(); // Clear the form
    } else {
      throw new Error(result.message || "Submission failed");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error submitting form.");
  }
});




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

function setupFileUpload(inputId) {
  const fileInput = document.getElementById(inputId);
  const wrapper = fileInput.parentElement;

  wrapper.addEventListener('dragover', (e) => {
    e.preventDefault();
    wrapper.classList.add('dragover');
  });

  wrapper.addEventListener('dragleave', () => {
    wrapper.classList.remove('dragover');
  });

  wrapper.addEventListener('drop', (e) => {
    e.preventDefault();
    wrapper.classList.remove('dragover');
    fileInput.files = e.dataTransfer.files;
    updateFileName(fileInput);
  });

  wrapper.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    updateFileName(fileInput);
  });
}

function updateFileName(fileInput) {
  const fileName = fileInput.files[0]?.name;
  const dragDropText = fileInput.parentElement.querySelector('.drag-drop-text');
  if (fileName) {
    dragDropText.textContent = `Selected: ${fileName}`;
  } else {
    dragDropText.textContent = 'Drag and drop or click to upload';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupFileUpload('offerLetter');
  setupFileUpload('recommendation');
  setupFileUpload('completion');

  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData();

    const formElements = event.target.elements;
    for (let element of formElements) {
      if (
        element.name &&
        element.type !== "file" &&
        element.type !== "submit"
      ) {
        formData.append(element.name, element.value);
      }
    }

    const offerLetter = document.getElementById("offerLetter").files[0];
    const recommendation = document.getElementById("recommendation").files[0];
    const completion = document.getElementById("completion").files[0];

    if (!offerLetter || !recommendation || !completion) {
      alert("Please upload all required documents");
      return;
    }

    formData.append("offerLetter", offerLetter);
    formData.append("recommendation", recommendation);
    formData.append("completion", completion);

    try {
      const response = await fetch(
        "http://localhost:3000/app/students/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Submission failed");
      }

      const result = await response.json();
      alert("Form submitted successfully!");
      event.target.reset();
      document.querySelectorAll(".drag-drop-text").forEach((text) => {
        text.textContent = "Drag and drop or click to upload";
      });
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Error submitting form");
    }
  });
});




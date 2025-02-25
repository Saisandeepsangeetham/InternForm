function loadTableData(data) {
  const tbody = document.querySelector("#dataTable tbody");
  tbody.innerHTML = ""; // Clear previous data

  data.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td data-label="Reg Number">${item.regNumber}</td>
      <td data-label="Name">${item.name}</td>
      <td data-label="Year">${item.year}</td>
      <td data-label="Title">${item.title}</td>
      <td data-label="Mobile">${item.mobile}</td>
      <td data-label="Section">${item.section}</td>
      <td data-label="Internship Obtained">${item.internshipObtained}</td>
      <td data-label="Start Date">${item.startDate}</td>
      <td data-label="End Date">${item.endDate}</td>
      <td data-label="Period">${item.period}</td>
      <td data-label="Company Name">${item.companyName}</td>
      <td data-label="Placement Source">${item.placementSource}</td>
      <td data-label="Stipend">${item.stipend}</td>
      <td data-label="Internship Type">${item.internshipType}</td>
      <td data-label="Location">${item.location}</td>
      <td data-label="File URL">${item.fileUrl}</td>
    `;
    tbody.appendChild(tr);
  });
}

async function fetchAllstudents() {
  try {
    const response = await fetch(
      "http://localhost:3000/app/coordinator/allstd"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    if (result && result.data_std) {
      loadTableData(result.data_std);
    } else {
      console.log("No 1st year student data received.");
    }
  } catch (error) {
    console.error("Error fetching batch1 student data:", error);
  }
}

async function fetchBatch1Students() {
  try {
    const response = await fetch(
      "http://localhost:3000/app/coordinator/getbatch1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    if (result && result.batch1Students) {
      loadTableData(result.batch1Students);
    } else {
      console.log("No 1st year student data received.");
    }
  } catch (error) {
    console.error("Error fetching batch1 student data:", error);
  }
}

async function fetchBatch2Students() {
  try {
    const response = await fetch(
      "http://localhost:3000/app/coordinator/getbatch2"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    if (result && result.batch2Students) {
      loadTableData(result.batch2Students);
    } else {
      console.log("No 2nd year student data received.");
    }
  } catch (error) {
    console.error("Error fetching batch1 student data:", error);
  }
}

async function fetchBatch3Students() {
  try {
    const response = await fetch(
      "http://localhost:3000/app/coordinator/getbatch3"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    if (result && result.batch3Students) {
      loadTableData(result.batch3Students);
    } else {
      console.log("No 3rd year student data received.");
    }
  } catch (error) {
    console.error("Error fetching batch1 student data:", error);
  }
}

async function fetchBatch4Students() {
  try {
    const response = await fetch(
      "http://localhost:3000/app/coordinator/getbatch4"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    if (result && result.batch4Students) {
      loadTableData(result.batch4Students);
    } else {
      console.log("No 4th year student data received.");
    }
  } catch (error) {
    console.error("Error fetching batch1 student data:", error);
  }
}

async function fetchStdThroughCDC() {
  try {
    const response = await fetch(
      "http://localhost:3000/app/coordinator/stdthroughcdc"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    if (result && result.stdThroughcdc) {
      loadTableData(result.stdThroughcdc);
    } else {
      console.log("No student data received.");
    }
  } catch (error) {
    console.error("Error fetching batch1 student data:", error);
  }
}

async function fetchStdNotThroughCDC() {
  try {
    const response = await fetch(
      "http://localhost:3000/app/coordinator/stdnotthroughcdc"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    if (result && result.std_Not_Throughcdc) {
      loadTableData(result.std_Not_Throughcdc);
    } else {
      console.log("No student data received.");
    }
  } catch (error) {
    console.error("Error fetching batch1 student data:", error);
  }
}

async function fetchIndustryStudents() {
  try {
    const response = await fetch(
      "http://localhost:3000/app/coordinator/industrystd"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    if (result && result.std_industry) {
      loadTableData(result.std_industry);
    } else {
      console.log("No student data received.");
    }
  } catch (error) {
    console.error("Error fetching batch1 student data:", error);
  }
}

async function fetchabroadstd() {
  try {
    const response = await fetch(
      "http://localhost:3000/app/coordinator/abroad"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    if (result && result.std_abroad) {
      loadTableData(result.std_abroad);
    } else {
      console.log("No student data received.");
    }
  } catch (error) {
    console.error("Error fetching batch1 student data:", error);
  }
}

async function fetchindiastd() {
  try {
    const response = await fetch("http://localhost:3000/app/coordinator/india");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    if (result && result.std_india) {
      loadTableData(result.std_india);
    } else {
      console.log("No student data received.");
    }
  } catch (error) {
    console.error("Error fetching batch1 student data:", error);
  }
}

async function fetchHighStipendStd() {
  try {
    const response = await fetch(
      "http://localhost:3000/app/coordinator/stipend"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    if (result && result.studentsWithHighStipend) {
      loadTableData(result.studentsWithHighStipend);
    } else {
      console.log("No student data received for high stipend.");
    }
  } catch (error) {
    console.error("Error fetching high stipend student data:", error);
  }
}

async function fetchCompanyWiseStd(companyName) {
  try {
    const response = await fetch(
      "http://localhost:3000/app/coordinator/company",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company: companyName }),
      }
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const result = await response.json();
    if (result && result.students) {
      loadTableData(result.students);
    } else {
      console.log("No data for the specified company.");
    }
  } catch (error) {
    console.error("Error fetching company-wise student data:", error);
  }
}

async function fetchStdByInternshipPeriodWithValue(periodValue) {
  try {
    const response = await fetch(
      "http://localhost:3000/app/coordinator/period",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ period: periodValue }),
      }
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const result = await response.json();
    if (result && result.students) {
      loadTableData(result.students);
    } else {
      console.log("No data for the specified internship period.");
    }
  } catch (error) {
    console.error("Error fetching internship period student data:", error);
  }
}

function applyCompanyFilter() {
  const companyName = document.getElementById("companyFilter").value.trim();
  if (companyName) {
    fetchCompanyWiseStd(companyName);
  } else {
    console.log("Please enter a company name.");
  }
}

function applyPeriodFilter() {
  const periodValue = document.getElementById("periodFilter").value.trim();
  if (periodValue) {
    fetchStdByInternshipPeriodWithValue(periodValue);
  } else {
    console.log("Please enter a period value in months.");
  }
}

function applyFilter() {
  const filterValue = document.getElementById("filterOption").value;
  const companyFilterContainer = document.getElementById(
    "companyFilterContainer"
  );
  const periodFilterContainer = document.getElementById(
    "periodFilterContainer"
  );

  if (filterValue === "company") {
    companyFilterContainer.style.display = "flex";
  } else {
    companyFilterContainer.style.display = "none";
  }

  if (filterValue === "period") {
    periodFilterContainer.style.display = "flex";
  } else {
    periodFilterContainer.style.display = "none";
  }

  if (filterValue === "batch1") {
    fetchBatch1Students();
  } else if (filterValue === "batch2") {
    fetchBatch2Students();
  } else if (filterValue === "batch3") {
    fetchBatch3Students();
  } else if (filterValue === "batch4") {
    fetchBatch4Students();
  } else if (filterValue === "cdc") {
    fetchStdThroughCDC();
  } else if (filterValue === "non-cdc") {
    fetchStdNotThroughCDC();
  } else if (filterValue === "industry") {
    fetchStdIndustry();
  } else if (filterValue === "period") {
    applyPeriodFilter();
  } else if (filterValue === "company") {
    applyCompanyFilter();
  } else if (filterValue === "stipend") {
    fetchHighStipendStd();
  } else if (filterValue === "abroad") {
    fetchabroadstd();
  } else if (filterValue === "india") {
    fetchindiastd();
  } else {
    console.log(`Filter "${filterValue}" not implemented yet.`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const userNameElement = document.getElementById("userName");
  const userPictureElement = document.getElementById("userPicture");
  const storedName = localStorage.getItem("userName");
  const storedPicture = localStorage.getItem("userPicture");
  if (storedName) {
    userNameElement.textContent = storedName;
  }
  if (storedPicture) {
    userPictureElement.src = storedPicture;
  }

  fetchAllstudents();
  document.getElementById("applyFilter").addEventListener("click", applyFilter);
  document
    .getElementById("applyCompanyFilter")
    .addEventListener("click", applyFilter);
  document
    .getElementById("applyPeriodFilter")
    .addEventListener("click", applyFilter);
});

document.getElementById("submitBtn").addEventListener("click", generatePDF);

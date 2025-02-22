// Simulated data: In practice, fetch this data from your backend or JSON file.
const studentsData = [
    {
      regNumber: "001",
      name: "Alice Johnson",
      title: "Intern",
      mobile: "1234567890",
      section: "A",
      internshipObtained: "Yes",
      startDate: "2023-06-01",
      endDate: "2023-08-31",
      period: "3",
      companyName: "Company A",
      placementSource: "cdc",
      stipend: "50000",
      internshipType: "Industry",
      location: "india",
      fileUrl: "url1"
    },
    {
      regNumber: "002",
      name: "Bob Smith",
      title: "Intern",
      mobile: "0987654321",
      section: "B",
      internshipObtained: "Yes",
      startDate: "2023-05-01",
      endDate: "2023-07-31",
      period: "3",
      companyName: "Company B",
      placementSource: "non-cdc",
      stipend: "120000",
      internshipType: "Academic",
      location: "abroad",
      fileUrl: "url2"
    }
    // ... more data rows
  ];
  
  // Function to load table data based on filtered data
  function loadTableData(data) {
    const tbody = document.querySelector('#dataTable tbody');
    tbody.innerHTML = ''; // Clear previous data
  
    data.forEach(item => {
      const tr = document.createElement('tr');
  
      // For responsiveness, add a data-label attribute to each cell
      tr.innerHTML = `
        <td data-label="Reg Number">${item.regNumber}</td>
        <td data-label="Name">${item.name}</td>
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
  
  // Initial load
  loadTableData(studentsData);
  
  // Filter logic
  document.getElementById('applyFilter').addEventListener('click', () => {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
    const filterValue = document.getElementById('filterOption').value;
    
    let filteredData = studentsData;
  
    // Apply filter based on selection
    if (filterValue) {
      switch (filterValue) {
        case "cdc":
          filteredData = filteredData.filter(s => s.placementSource.toLowerCase() === "cdc");
          break;
        case "non-cdc":
          filteredData = filteredData.filter(s => s.placementSource.toLowerCase() !== "cdc");
          break;
        case "academic":
          filteredData = filteredData.filter(s => s.internshipType.toLowerCase() === "academic");
          break;
        case "industry":
          filteredData = filteredData.filter(s => s.internshipType.toLowerCase() === "industry");
          break;
        case "academicYear":
          // For demonstration, assume academic year is part of the regNumber or another field.
          // Replace this with your actual logic.
          filteredData = filteredData.filter(s => s.regNumber.startsWith("0"));
          break;
        case "period":
          // Assume a given period filter. Replace with your period logic.
          filteredData = filteredData.filter(s => parseInt(s.period) === 3);
          break;
        case "company":
          // For demonstration, filter by a specific company name.
          filteredData = filteredData.filter(s => s.companyName.toLowerCase() === "company a");
          break;
        case "stipend":
          filteredData = filteredData.filter(s => parseInt(s.stipend) > 100000);
          break;
        case "abroad":
          filteredData = filteredData.filter(s => s.location.toLowerCase() === "abroad");
          break;
        case "india":
          filteredData = filteredData.filter(s => s.location.toLowerCase() === "india");
          break;
        default:
          break;
      }
    }
  
    // Apply search filter on student name or registration number, etc.
    if (searchQuery) {
      filteredData = filteredData.filter(s =>
        s.name.toLowerCase().includes(searchQuery) ||
        s.regNumber.toLowerCase().includes(searchQuery)
      );
    }
  
    loadTableData(filteredData);
  });
  
  // Autofill coordinator details from localStorage
  document.addEventListener("DOMContentLoaded", () => {
    const userNameElement = document.getElementById('userName');
    const userPictureElement = document.getElementById('userPicture');
  
    const storedName = localStorage.getItem("userName");
    const storedPicture = localStorage.getItem("userPicture");
  
    if (storedName) {
      userNameElement.textContent = storedName;
    }
    if (storedPicture) {
      userPictureElement.src = storedPicture;
    }
  });
  
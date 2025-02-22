window.onload = function () {
  const userRole = localStorage.getItem("userRole");
  const userName = localStorage.getItem("userName");
  const userPicture = localStorage.getItem("userPicture");

  if (userRole) {
    document.querySelector(".name-pic span").textContent = userName;
    document.querySelector(".name-pic img").src = userPicture;
    document.getElementById("name").textContent = userName;
  } else {
    console.log("User unknown");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById('name');
  const storedName = localStorage.getItem("userName");
  if (storedName) {
    nameInput.value = storedName;
    nameInput.disabled = true;
  }
});

const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const periodInput = document.getElementById('period');

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

    startDateInput.addEventListener('change', calculateMonths);
    endDateInput.addEventListener('change', calculateMonths);

document.addEventListener("DOMContentLoaded", function () {
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
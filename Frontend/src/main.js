window.onload = function () {
  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(
    document.querySelector(".google-login-button"),
    {
      theme: "outline",
      size: "large", 
      shape: "pill", 
      text: "signin_with",
      logo_alignment: "left", 
    }
  );

  google.accounts.id.prompt(); 
};

function handleCredentialResponse(response) {
  console.log("Encoded JWT ID Token: " + response.credential);

  const data = JSON.parse(atob(response.credential.split(".")[1]));
  console.log("User Info:", data);

  checkAuthorization(data.email, data);
}

async function checkAuthorization(userEmail, Userdata) {
  try {
    const response = await fetch("/staffs.json"); 
    const data = await response.json();

    const user = data.find((person) => person.email === userEmail);

    if (user) {
      console.log(`Access Level: ${user.access_level}`);
      localStorage.setItem("userRole", user.access_level); 
    } else {
      console.log("User is a Student");
      localStorage.setItem("userRole", "Student");
    }

    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("userName", Userdata.name);
    localStorage.setItem("userPicture", Userdata.picture);

    const userRole = localStorage.getItem("userRole");
    if (userRole === "Student") {
      window.location.href = "/src/Pages/Homepage/Index.html";
    } else {
      window.location.href = "/src/Pages/Coordinator/index.html";
    }
  } catch (error) {
    console.error("Error fetching staffs.json", error);
  }
}

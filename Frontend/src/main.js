window.onload = function () {
  google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
      document.querySelector(".google-login-button"),
      { theme: "none", size: "medium" }
  );

  google.accounts.id.prompt(); // Show login prompt if user is not signed in
};

function handleCredentialResponse(response) {
  console.log("Encoded JWT ID Token: " + response.credential);

  // Decode JWT Token (Optional)
  const data = JSON.parse(atob(response.credential.split(".")[1]));
  console.log("User Info:", data);

  checkAuthorization(data.email,data);
}

async function checkAuthorization(userEmail,Userdata) {
  try {
      const response = await fetch("/staffs.json"); // Fetch JSON from public folder
      const data = await response.json();

      // Check if the email exists in people.json
      const user = data.find(person => person.email === userEmail);

      if (user) {
          console.log(`Access Level: ${user.access_level}`);
          localStorage.setItem("userRole", user.access_level); // Store role
      } else {
          console.log("User is a Student");
          localStorage.setItem("userRole", "Student"); // Default role
      }

      localStorage.setItem("userEmail", userEmail); // Store email
      localStorage.setItem("userName", Userdata.name);
      localStorage.setItem("userPicture",Userdata.picture); 
      
      console.log(Userdata);// Store token
      // Redirect to homepage
      window.location.href = "/src/Pages/Homepage/Index.html";
  } catch (error) {
      console.error("Error fetching people.json", error);
  }
}

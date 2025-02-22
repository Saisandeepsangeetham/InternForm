
const coordinatorData = {
    id: "coord01",
    name: "Dr. John Doe",
    email: "johndoe@example.com",
    role: "Coordinator",
    department: "Engineering"
  };
  
  exports.getCoordinatorDetails = (req, res) => {
    res.status(200).json(coordinatorData);
  };
  
  // Optionally, add functions to update coordinator details, etc.
  
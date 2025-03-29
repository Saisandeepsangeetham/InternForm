# SSN Internship Management Portal 🎓

A comprehensive web application for managing student internships at Sri Sivasubramaniya Nadar College of Engineering. The portal allows students to submit internship details and coordinators to track and analyze internship data.

## 📐 Project Structure

```
internship-portal/
├── Backend/
│   ├── Configuration/
│   │   ├── connectDB.js
│   │   └── googleDriveService.js
│   ├── Controller/
│   │   ├── coordinatorcontroller.js
│   │   └── studentcontroller.js
│   ├── Model/
│   │   └── Student.js
│   └── Routes/
│       ├── coordinatorroute.js
│       └── studentroute.js
├── Frontend/
│   ├── assets/
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── Homepage/
│   │   │   └── Coordinator/
│   │   ├── main.js
│   │   └── style.css
│   └── index.html
```

## 🌟 Features

### Student Portal
- Secure Google OAuth login system
- Interactive form for internship detail submission
- File upload system for internship documents
- Automatic period calculation
- Real-time form validation
- Google Drive integration for document storage

### Coordinator Dashboard
- Comprehensive data filtering options:
  - Year-wise student segregation
  - CDC vs Non-CDC placements
  - Industry internship tracking
  - Location-based filtering (India/Abroad)
  - Company-wise student lists
  - Stipend-based filtering
- Advanced search functionality
- Excel export with clickable drive links
- Responsive design for all devices


## 🛠️ Tech Stack

### Frontend
- Vanilla JavaScript
- HTML5
- CSS3
- Google OAuth 2.0
- XLSX.js for Excel generation

### Backend
- Node.js
- Express.js
- MongoDB
- Google Drive API
- Multer for file handling

## 📸 Screenshots

![Login Page](./Readme%20Assets/InternLogin.png)

### Student Form
![Intern Form](./Readme%20Assets/InterForm1.png)
![Form Details](./Readme%20Assets/InternForm2.png)

### Coordinator Dashboard
![Coordinator Page](./Readme%20Assets/CoordinatorPage1.png)
![Coordinator Page](./Readme%20Assets/CoordinatorPage.png)
![Drive Output](./Readme%20Assets/CoordinatorOutput1.png)
![Excel Output](./Readme%20Assets/ExcelOutput.png)

## 🚀 Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/internship-portal.git
```

2. Install dependencies for backend:
```bash
cd Backend
npm install
```

3. Install dependencies for frontend:
```bash
cd Frontend
npm install
```

4. Set up environment variables:
```bash
#Backend/Crendentials/cloud_api_credentials.json
creation of Credentials.json File

# Backend/.env
MONGODB_URI=your_mongodb_uri
GOOGLE_DRIVE_PARENT_FOLDER_ID=your_folder_id

# Frontend/.env
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

5. Start the servers:
```bash
# Backend
npm run dev

# Frontend
npm run dev
```

## 🛣️ API Routes

### Backend Student Routes
```javascript
POST /app/students/submit      // Submit internship details
```

### Backend Coordinator Routes
```javascript
GET  /app/coordinator/allstd           // Get all students
GET  /app/coordinator/getbatch1        // Get 1st year students
GET  /app/coordinator/getbatch2        // Get 2nd year students
GET  /app/coordinator/getbatch3        // Get 3rd year students
GET  /app/coordinator/getbatch4        // Get 4th year students
GET  /app/coordinator/stdthroughcdc    // Get CDC placements
GET  /app/coordinator/stdnotthroughcdc // Get non-CDC placements
GET  /app/coordinator/industrystd      // Get industry internships
GET  /app/coordinator/abroad           // Get international internships
GET  /app/coordinator/india            // Get domestic internships
GET  /app/coordinator/stipend          // Get high-stipend internships
GET  /app/coordinator/search           // Search students
POST /app/coordinator/company          // Get company-wise data
POST /app/coordinator/period           // Get period-wise data
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

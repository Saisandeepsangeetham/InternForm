import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  regNumber: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true,
    enum: ['1st Year', '2nd Year', '3rd Year', '4th Year']
  },
  title: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true,
    enum: ['A', 'B', 'C']
  },
  internshipObtained: {
    type: String,
    required: true,
    enum: ['Yes', 'No']
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  period: {
    type: Number,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  placementSource: {
    type: String,
    required: true,
    enum: ['Through CDC', 'Off Campus']
  },
  stipend: {
    type: Number,
    default: 0
  },
  internshipType: {
    type: String,
    required: true,
    enum: ['Research Based', 'Normal', 'Industry']
  },
  location: {
    type: String,
    required: true,
    enum: ['Abroad', 'India']
  },
  offerLetterUrl: {
    type: String,
    required: true
  },
  recommendationUrl: {
    type: String,
    required: true
  },
  completionCertificateUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Student', studentSchema);
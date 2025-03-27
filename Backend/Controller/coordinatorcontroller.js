import Student from '../Model/Student.js';

// Get all students
export const getAllstudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ data_std: students });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get 1st year students
export const handleBatch1 = async (req, res) => {
  try {
    const batch1Students = await Student.find({ year: '1st Year' });
    res.status(200).json({ batch1Students });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get 2nd year students
export const handleBatch2 = async (req, res) => {
  try {
    const batch2Students = await Student.find({ year: '2nd Year' });
    res.status(200).json({ batch2Students });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get 3rd year students
export const handleBatch3 = async (req, res) => {
  try {
    const batch3Students = await Student.find({ year: '3rd Year' });
    res.status(200).json({ batch3Students });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get 4th year students
export const handleBatch4 = async (req, res) => {
  try {
    const batch4Students = await Student.find({ year: '4th Year' });
    res.status(200).json({ batch4Students });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get students through CDC
export const stdThroughCDC = async (req, res) => {
  try {
    const stdThroughcdc = await Student.find({ placementSource: 'Through CDC' });
    res.status(200).json({ stdThroughcdc });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get students not through CDC
export const std_Not_ThroughCDC = async (req, res) => {
  try {
    const std_Not_Throughcdc = await Student.find({ placementSource: 'Off Campus' });
    res.status(200).json({ std_Not_Throughcdc });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get students with industry internships
export const std_Industry_intern = async (req, res) => {
  try {
    const std_industry = await Student.find({ internshipType: 'Industry' });
    res.status(200).json({ std_industry });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get students with abroad internships
export const std_Abroad = async (req, res) => {
  try {
    const std_abroad = await Student.find({ location: 'Abroad' });
    res.status(200).json({ std_abroad });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get students with India internships
export const std_India = async (req, res) => {
  try {
    const std_india = await Student.find({ location: 'India' });
    res.status(200).json({ std_india });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get students with high stipend
export const stdStipendMoreThanLakh = async (req, res) => {
  try {
    const studentsWithHighStipend = await Student.find({ stipend: { $gt: 100000 } });
    res.status(200).json({ studentsWithHighStipend });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get students by company
export const stdCompanyWise = async (req, res) => {
  try {
    const { company } = req.body;
    const students = await Student.find({
      companyName: { $regex: new RegExp(company, 'i') }
    });
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get students by internship period
export const stdByInternshipPeriod = async (req, res) => {
  try {
    const { period } = req.body;
    const students = await Student.find({ period: Number(period) });
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search students by name or registration number
export const stdByNameRegNo = async (req, res) => {
  try {
    const { query } = req.query;
    const students = await Student.find({
      $or: [
        { name: { $regex: new RegExp(query, 'i') } },
        { regNumber: { $regex: new RegExp(query, 'i') } }
      ]
    });
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
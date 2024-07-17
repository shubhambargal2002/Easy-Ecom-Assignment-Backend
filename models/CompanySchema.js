const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true, maxLength: 50 },
  companyAddress: String,
  email: { type: String, required: true, maxLength: 100 },
  phoneNumber: { type: String, required: true, maxLength: 15 },
  empInfo: [
    {
      empName: { type: String, required: true, maxLength: 25 },
      empDesignation: { type: String, required: true },
      empJoinDate: { type: Date, required: true },
      empEmail: { type: String, required: true, maxLength: 100 },
      empPhoneNumber: { type: String, required: true, maxLength: 15 },
      skillInfo: [
        {
          skillName: { type: String, required: true },
          skillRating: { type: Number, required: true, min: 1, max: 5 },
        },
      ],
      educationInfo: [
        {
          instituteName: { type: String, required: true, maxLength: 50 },
          courseName: { type: String, required: true, maxLength: 25 },
          completedYear: { type: String, required: true },
        },
      ],
    },
  ],
}, { timestamps: true });

const Company = mongoose.model('COMPANY', companySchema);
module.exports = Company;

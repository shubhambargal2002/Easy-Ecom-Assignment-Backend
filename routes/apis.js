const express = require("express");
const router = express.Router();
const Company = require("../models/CompanySchema");

router.get("/getAllCompanies", async (req, res) => {
  try {
    const companies = await Company.find();
    res.send(companies);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/addNewCompany", async (req, res) => {
  const company = new Company(req.body);
  try {
    await company.save();
    res.status(200).json({ message: "Company details saved successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error saving company details" });
  }
});

router.get("/getCompanyDetails/:id", async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) {
    res.status(404).json({ message: "Company not found" });
  } else {
    res.json(company);
  }
});

router.put("/editCompany/:id", async (req, res) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!company) {
    res.status(404).json({ message: "Company not found" });
  } else {
    res.json({ message: "Company details updated successfully" });
  }
});

router.delete("/deleteCompany/:id", async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete company" });
  }
});

module.exports = router;

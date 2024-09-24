const registerModel = require("../models/registerModel");

exports.createRegisters = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Attempt to create a new user in the database
    const register = await registerModel.create({
      username,
      email,
      password,
    });

    // If successful, return the user data
    res.json({
      success: true,
      register,
    });
  } catch (err) {
    // Handle duplicate email error (MongoDB error code 11000)
    if (err.code === 11000) {
      res.status(400).json({
        success: false,
        message: "Email already exists. Please use a different email.",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Failed to create user",
        error: err.message,
      });
    }
  }
};

const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    department: {
      type: number,
      require: true,
    },
    email: {
      type: String,
      require: false,
    },
    phone: {
      type: String,
      require: false,
      min: 8,
    },
    address: {
      type: String,
      require: false,
      maxlength: 200,
    },
  },
  { timestamp: true }
);

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;

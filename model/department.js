const mongoose = require("mongoose");

const DepartmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 0,
    },
    description: {
      type: String,
      require: true,
      maxlength: 200,
    },
  },
  { timestamp: true }
);

const Department = mongoose.model("Department", DepartmentSchema);
module.exports = Department;

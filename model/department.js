const mongoose = require("mongoose");

const DepartmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamp: true }
);

const Department = mongoose.model("Department", DepartmentSchema);
module.exports = Department;

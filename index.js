const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const port = 4000;

const app = express();
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout", "layouts/default");
app.use(express.static("public"));

// let mongoURL =
//   "mongodb+srv://arkarphyo:test1234@cluster0.44naqvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose
//   .connect(mongoURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log("DB is connected");
// })
// .catch((err) => {
//   console.error("MongoDB connection error:", err);
// });

serverStart();
function serverStart() {
  app
  .listen(port, () => {
    console.log(`Server started on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Server error:", err);
    });
}

app.get("/", (req, res) => {
  res.render("dashboard", {
    title: "Dashboard",
  });
});
app.get("/department", (req, res) => {
  res.render("department", {
    title: "Department",
  });
});
app.get("/department/create", (req, res) => {
  res.render("departmentcreate", {
    title: "Department",
  });
});
app.get("/employee", (req, res) => {
  res.render("employee", {
    title: "Employee",
  });
});
app.get("/employee/create", (req, res) => {
  res.render("employeecreate", {
    title: "Employee",
  });
});

app.get("/profile", (req, res) => {
  res.render("profile", {
    title: "Profile",
  });
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("500");
});

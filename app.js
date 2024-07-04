const express = require("express");
const app = express();
const port = 3000;
const users = [
  { id: 1, firstName: "John1", lastName: "Doe", city: "cotonou" },
  { id: 2, firstName: "John2", lastName: "Doe", city: "calavi" },
  { id: 3, firstName: "John3", lastName: "Doe", city: "parakou" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const currentUser = users.filter((el) => {
   return el.id == id;
  });
  res.send(`Le user est ${currentUser[0].firstName}`);
});
app.listen(port, () => {
  console.log("let's go😎");
});

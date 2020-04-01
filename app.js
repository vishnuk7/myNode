const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const rootDir = require("./util/path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

/*
The way of serving files in statically
but file have only read-only access
*/

app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

/*
when you use app.use() method then it not check
for absolute path so it execute whenever "/" find 
and that's why into end
*/

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found" });
});

//creating servering
/*
internaly it call the createServer method
*/
app.listen(3001);

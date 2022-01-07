const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

app.get("/", (req, res) => {
    res.send("<h1>SERVER</h1>");
});

app.route("/about")
    .get((req, res) => {
        const a = 1;
        const b = 2;
        res.send(JSON.stringify(a + b));
    })
    .post((req, res) => {})
    .patch((req, res) => {});

app.listen(app.get("port"), () => {
    console.log(`server is running at http://localhost:${app.get("port")}`);
});

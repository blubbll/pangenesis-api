const express = require("express"),
  app = express(),
  fetch = require("node-fetch");

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/*", (req, res) => {
  fetch(`//pangenesisgame.com/${req.originalUrl}`).then(_res => res.text()).then(text => console.log(text));
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your forwarder is listening on port ${listener.address().port}`);
});

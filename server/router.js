let router = require("express").Router();
let model = require("./models.js");

router
  .route("/cat")
  .get((req, res) => {
    model.getAllCategories().then(data => {
      //SEND BACK ALL CATEGORY DATA
    });
    res.send("GET cat");
  })
  .post((req, res) => {
    model
      .addCategory()
      .then(data => {
        console.log("*** Successfully Sent Client Updated Categories ***");
        res.send(data);
      })
      .catch(err => {
        console.error("!!! Error Sending Client Updated Categories !!!");
        res.sendStatus(500);
      });
  })
  .put((req, res) => {
    model.editCategory().then(data => {
      // NEED TO CONDITIONALLY SEE IF IT IS A SPEND OR EDIT UPDATE
      //SEND BACK ALL CATEGORY DATA
    });
    res.send("PUT cat");
  })
  .delete((req, res) => {
    model.deleteCategory().then(data => {
      //SEND BACK ALL CATEGORY DATA
    });
    res.send("DELETE cat");
  });

router
  .route("/funds")
  .get((req, res) => {
    model.getFunds().then(data => {
      //SEND BACK NEW FUND TOTAL
    });
    res.send("GET funds");
  })
  .put((req, res) => {
    model.editFunds().then(data => {
      //SEND BACK NEW FUND TOTAL
    });
    res.send("PUT funds");
  });

module.exports = router;

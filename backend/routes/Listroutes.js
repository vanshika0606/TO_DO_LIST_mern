const express = require("express");
const {Add , Getlist, deletetask, Updatetask} = require("../controllers/ListController");

const router = express.Router();


router.route("/add").post(Add);
router.route("/lists").get(Getlist)
router.route("/:id").delete(deletetask).put(Updatetask)


module.exports = router;
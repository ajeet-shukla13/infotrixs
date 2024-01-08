const express=require("express");
const router=express.Router();

const {
    getQuote,
    addQuote,
    updateQuote,
    deleteQuote
     }=require('../controllers/quote');

router.route("/quote").get(getQuote);
router.route("/quote").post(addQuote);
router.route("/quote/:id").put(updateQuote);
router.route("/quote/:id").delete(deleteQuote);


module.exports=router;
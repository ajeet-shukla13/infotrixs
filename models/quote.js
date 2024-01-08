const mongoose=require("mongoose");

const quoteSchema= new mongoose.Schema({
    q: { type: String, required: true },
    a: { type: String, required: true },
    c: { type: Number, required: true },
    h: { type: String, required: true },
});
const Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;
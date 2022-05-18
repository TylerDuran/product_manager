//------ Import mongoose to build a model -----------------------------------------------
const mongoose = require("mongoose");

//------The Schema - The rules that the entries in the DB must follow -------------------
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must have a title"],
        minlength: [3, "{PATH} be at least 3 characters long, you gave {VALUE}"]
    },
    price: {
        type: Number,
        required: [true, "Must have a price"],
        // minlength: [1, "{PATH} be at least 1 characters long, you gave {VALUE}"]
    },
    description: {
        type: String,
        required: [true, "Must have a description"],
        minlength: [3, "{PATH} be at least 3 characters long, you gave {VALUE}"]
    }
}, { timestamps: true });


//------ Create the Schema --------------------------------------------------------------
const Product = mongoose.model('Product', ProductSchema);

// ------ Export the model --------------------------------------------------------------
module.exports = Product;
/////////////////////////////////////////////////////////////////////////////////////////
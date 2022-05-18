//------ Controller is for CRUD ---------------------------------------------------------
//------ Import the MODEL to use Queries ------------------------------------------------
const { json } = require("express")
const Product = require("../model/products.model")

//------ The way below exports as a whole Object and Each Key has a value as a Function -
module.exports = {

    //------ Read all ------
    findAll: (req, res) => {
        Product.find()
            .then( (products) => {
                // whatever we choose to come back to the client, the client has to accept here
                console.log(products);
                return res.json(products)
            })
            .catch(err => res.json(err))
    },

    //------ Create --------
    create: (req, res) => {
        // Pass in body data
        console.log(req.body);
        Product.create(req.body)
            .then( (newProduct) => {
                console.log("DB success, new product created");
                return res.json(newProduct)
            })
            .catch(err => {
                console.log("DB ERROR create new product FAILED");
                return res.json(err)
            })
    },

    // ------ Read one -----
    findOne: (req, res) => {
        console.log(req.params);
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.json(err))

    },

    // ------ Update -------
    update: (req, res) => {
        console.log("UPDATE id:", req.params.id);
        console.log("UPDATE OBJ:", req.body);
        Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json(err))
    },

    // ------ Delete -------
    delete: (req, res) => {
        console.log(req.params.id);
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

}
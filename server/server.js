const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "Product_DB";

//------ Middleware ---------------------------------------------------------------------
app.use(cors(), express.json(), express.urlencoded({extended:true}))
/////////////////////////////////////////////////////////////////////////////////////////

//------ Database Connection ------------------------------------------------------------
require("./config/mongoose.config")(DB);
/////////////////////////////////////////////////////////////////////////////////////////

//------ Connect the Routes 
require("./routes/products.routes")(app)
/////////////////////////////////////////////////////////////////////////////////////////

//------ Start the Server ---------------------------------------------------------------
app.listen(PORT, () => console.log(` >>>> Server is up on port: ${PORT} <<<< `))
/////////////////////////////////////////////////////////////////////////////////////////


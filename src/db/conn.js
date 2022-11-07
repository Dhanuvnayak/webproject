const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dhanalakshmi:dhanu@cluster0.8c0srz0.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})
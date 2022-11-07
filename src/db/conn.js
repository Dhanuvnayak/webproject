const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dhanalakshmi:dhanu@cluster0.sf5fqyd.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})
const mongoose = require('mongoose');
const db = require('../configs/keys').mongoURI;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => { console.log("MongoDB successfully connected"); 
}).catch((e) => {
    console.log(e);
})
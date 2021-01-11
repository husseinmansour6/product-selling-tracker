const mongoose = require("mongoose")

mongoose.connect(
  '"mongodb+srv://hmansour:husseinmansour6@cluster0.lkigv.mongodb.net/product-selling-tracker-db?retryWrites=true&w=majority"',
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  err => {
    if (!err) {
      console.log("Successfully Connected in MongoDB")
    } else {
      console.log("Syntax Error: " + err)
    }
  }
)

require("./productModule")

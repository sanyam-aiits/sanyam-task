const mongose = require("mongoose");
const productSchema = new mongose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  //   imageUrl: {
  //     type: String,
  //     required: true,
  //   },
  like: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  status: { 
    type: Boolean,
    required: true,
   
  },
  category: {
    type: String,
    required: true,
  },
}); 
module.exports = mongose.model("Product", productSchema);

const axios = require("axios");
 const updatewebhook =  async(id,...product) => {
    console.log("Updating product with ID:", id);
    console.log("Product data:", product);
   try {
     const { name, price, description, like, discount, status, category } = product;
     const response = await axios.put(`http://localhost:3000/product/product/${id}`, {
       name,        
       price,
       description,
       like,
       discount,
       status,
       category,
     });
     console.log("Product updated successfully:", response.data);
     return response.data;
   } catch (err) {
     console.error("Error updating product:", err);
     throw err;
   }
 };
 exports.updatewebhook = updatewebhook;
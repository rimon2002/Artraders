import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

function ProductManagement() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    console.log("Product Added:", productName, price);
    // You can add logic here to make an API call to add the product
    setProductName("");
    setPrice("");
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Manage Products
      </Typography>
      <TextField
        label="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddProduct}
      >
        Add Product
      </Button>
    </Box>
  );
}

export default ProductManagement;

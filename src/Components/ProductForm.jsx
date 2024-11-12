import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../api/productapi';

const ProductForm = ({ selectedProduct, onFormSubmit }) => {
  const [product, setProduct] = useState({ name: '', data: { year: '', price: '', "CPU model": '', "Hard disk size": '' } });

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      data: { ...prevProduct.data, [name]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedProduct) {
      await updateProduct(selectedProduct.id, product);
    } else {
      await createProduct(product);
    }
    onFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
      <input type="text" placeholder="Year" name="year" value={product.data.year} onChange={handleChange} />
      <input type="text" placeholder="Price" name="price" value={product.data.price} onChange={handleChange} />
      <input type="text" placeholder="CPU Model" name="CPU model" value={product.data["CPU model"]} onChange={handleChange} />
      <input type="text" placeholder="Hard Disk Size" name="Hard disk size" value={product.data["Hard disk size"]} onChange={handleChange} />
      <button type="submit">{selectedProduct ? "Update" : "Create"} Product</button>
    </form>
  );
};

export default ProductForm;

import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setIsFormVisible(true);
  };

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsFormVisible(true);
  };

  const handleFormSubmit = () => {
    setIsFormVisible(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <h1>Product Manager</h1>
      <ProductList onSelectProduct={handleSelectProduct} onAddProduct={handleAddProduct} />
      {isFormVisible && (
        <ProductForm selectedProduct={selectedProduct} onFormSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;

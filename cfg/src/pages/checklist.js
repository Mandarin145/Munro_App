import React, { useState } from 'react';
import Navbar from '../Components/navbar/index';
import MiniNav from '../Components/mininav/mininav';
import './checklist.css'



const Checklist = () => {
  const [items, setItems] = useState([
    'Rucksack',
    'Waterproof Jacket',
    'Boots',
    'Thermal Top',
    'Hat',
    'Gloves',
    'Compass',
    'Torch',
    'Spare Layer e.g Fleece',
    'Watch',
    'Food & Drink',
    'First Aid Kit',
    'Mobile',
    'Whistle',
    'Emergency survival bag',
  ]);

  const [customItem, setCustomItem] = useState('');

  const handleCustomItemChange = (e) => {
    setCustomItem(e.target.value);
  };

  const handleAddCustomItem = () => {
    if (customItem.trim() !== '') {
      setItems([...items, customItem]);
      setCustomItem('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddCustomItem();
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <MiniNav />
    
    
    <div className="page-container">
      
      <div className="container custom-container">
        <h1>Checklist</h1>
        <h2>3 Days to go!</h2>
        {items.map((item, index) => (
          <div key={index} className="checkbox-item">
            <label className="checkbox-container">
              {item}
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <span
              className="delete-icon"
              onClick={() => handleDeleteItem(index)}
            >
              X
            </span>
          </div>
        ))}
        <div className="custom-input">
          <input
            type="text"
            value={customItem}
            onChange={handleCustomItemChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter new"
          />
          <button onClick={handleAddCustomItem}>Add Item</button>
        </div>
      </div>
      
      <Navbar />
    </div>
    </div>    
  );
};

export default Checklist;

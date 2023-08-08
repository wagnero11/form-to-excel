import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://script.google.com/macros/s/AKfycbwRn_txp6OneKNRwjmv_p6IxFIjnNcjoB2w-MBX3GG-Ztp3U_WxRTl3Rf21HcJL5oON9w/exec`, {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const rowId = await response.json();
      console.log("Row created with ID:", rowId);
    } else {
      console.log("Error:", response.status);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;

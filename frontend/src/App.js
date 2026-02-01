import React, { useState, useEffect } from 'react';
import './App.css';

const API_BASE = 'http://localhost:8000';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(`${API_BASE}/items/`);
    const data = await response.json();
    setItems(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await fetch(`${API_BASE}/items/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description }),
      });
      setEditingId(null);
    } else {
      await fetch(`${API_BASE}/items/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description }),
      });
    }
    setName('');
    setDescription('');
    fetchItems();
  };

  const handleEdit = (item) => {
    setName(item.name);
    setDescription(item.description);
    setEditingId(item.id);
  };

  const handleDelete = async (id) => {
    await fetch(`${API_BASE}/items/${id}`, { method: 'DELETE' });
    fetchItems();
  };

  return (
    <div className="App">
      <h1>Item Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">{editingId ? 'Update' : 'Add'} Item</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}: {item.description}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

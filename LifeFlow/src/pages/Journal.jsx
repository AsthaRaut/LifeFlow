import React, { useState, useContext } from 'react';
import { JournalContext } from '../context/JournalContext';
import { Button } from '../components/Button';

export default function Journal() {
  const { entries, addEntry, deleteEntry } = useContext(JournalContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    addEntry({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h1>Daily Journal</h1>
      <form onSubmit={handleSave} className="card-form">
        <input type="text" placeholder="Entry Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Write thoughts..." value={content} onChange={(e) => setContent(e.target.value)} required />
        <Button type="submit">Save Entry</Button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        {entries.map(e => (
          <div key={e.id} className="task-card">
            <div className="journal-header">
              <h4>{e.title}</h4>
              <small>{e.date}</small>
            </div>
            <p>{e.content}</p>
            <button className="delete-btn" onClick={() => deleteEntry(e.id)}>🗑</button>
          </div>
        ))}
      </div>
    </div>
  );
}
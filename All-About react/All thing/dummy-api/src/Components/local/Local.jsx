import React, { useState, useEffect } from 'react';

const Local = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [list, setList] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('list'));
    if (storedList) {
      setList(storedList);
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const handleAdd = () => {
    if (input1 && input2 && input3) {
      const newItem = { id: Date.now(), input1, input2, input3 };
      setList([...list, newItem]);
      setInput1('');
      setInput2('');
      setInput3('');
    }
  };

  const handleEdit = (id) => {
    const newInput1 = prompt('Edit Input 1:');
    const newInput2 = prompt('Edit Input 2:');
    const newInput3 = prompt('Edit Input 3:');
    setList(list.map(item => 
      item.id === id ? { ...item, input1: newInput1, input2: newInput2, input3: newInput3 } : item
    ));
  };

  const handleDelete = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Persistent List</h1>
      <div>
        <input
          type="text"
          placeholder="Input 1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Input 2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Input 3"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            {item.input1} - {item.input2} - {item.input3}
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Local;

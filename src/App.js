import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [nameInput, setNameInput] = useState('');
  const [names, setNames] = useState([]);
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const addName = () => {
    const newName = nameInput.trim();
    if (newName === '') {
      return;
    }

    setNames([...names, newName]);
    setNameInput('');
    setMessage('Имя успешно добавлено');
  };

  const changeName = (index) => {
    return () => {
      const changeName = prompt('Введите новое имя:', names[index]);
      if (changeName && changeName.trim() !== '') {
        const updatedNames = [...names];
        updatedNames[index] = changeName.trim();
        setNames(updatedNames);
        setMessage('Имя успешно изменено');
      }
    };
  };

  return (
    <div className="App">
        <h1>Список имен</h1>
        <input
            type="text"
            value={nameInput}
            onChange={handleInputChange}
            placeholder="Введите имя"
        />
        <button onClick={addName} disabled={!nameInput.trim()}>
          Добавить
        </button>
        <div className="message">{message}</div>
        {names.length === 0 && <div className="message">Список пуст</div>}
        <ul className="nameList">
          {names.map((name, index) => (
              <li key={index} className="listItem">
                {name}
                <button onClick={changeName(index)}>Поменять</button>
              </li>
          ))}
        </ul>


    </div>
  );
}

export default App;

import React from 'react';
import ItemList from './components/ItemList';
import ErrorMessage from './components/errorMessage';
import { ListItem } from './ts/typeAliases';
import { useState } from 'react';
import deleteIcon from './assets/delete.png';
import './styles/index.css';

function App() {
  
  const listArray:ListItem[] = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 2,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    }
  ];
  
  const [text, setText] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [items, setItems] = useState(listArray);

  const addItem = () => {
    if(text.trim() === ''){
      setIsEmpty(true);
    }
    else{
      const listArrayCopy  = [...items];
      const index = items.length;
      listArrayCopy.splice(index,0,{id: index+1, text: text});
      setItems(listArrayCopy);
      setText('');
      setIsEmpty(false);
    }
  }

  const removeItem = (id: number)=> {
    const listArrayCopy =  items.filter(item => item.id !== id);  
    setItems(listArrayCopy);
  }

  return (
    <div id="App">
      <ul className='list-container'>
      {items.map((item) =>  
        <ItemList key={item.id} text={item.text}>
          <button className="delete-icon" onClick={() => {
            removeItem(item.id);
            }}>
            <img src={deleteIcon} alt="delete-icon" />
          </button>
        </ItemList>
      )}
      </ul>
      <div className='add-item-container'>
      <input className='item-input-field'
        placeholder='Add item to list'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className='add-item-btn' onClick={addItem}>
        Add item
      </button>
      {isEmpty ? <ErrorMessage text='This field cannot be empty!'/> : null}
      </div>
  </div>
  );
}

export default App;

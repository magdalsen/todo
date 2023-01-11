import './App.css';
import NewItem from './components/NewItem';
import { useState } from 'react';
import ListItems from './components/ListItems';
import Button from './components/Button';
import Filter from './components/Filter';

function App() {
  const [item, setItem] = useState([]);
  const [isActive, setActive] = useState(false);
  const [isTicked, setTicked] = useState([]);

  const addItemToList = (iItem) => {
    setItem((prevItemsList) => {
      setActive(true);
      return [
        ...prevItemsList,
        { item: iItem, id: Math.random().toString() }]
    })
  }

  const handleDeleteItem = (iId) => {
    const deleteItem = item.filter(item => item.id !== iId);
    setItem(deleteItem);
    if (deleteItem.length <= 0) setActive(false);
    // console.log(item);
  }

  const handleDeleteAllItems = () => {
    setItem([]);
    setActive(false);
  }

  const handleFilterDone = () => {

  }

  const handleFilterClear = () => {

  }

  return (
    <div>
      <NewItem listNewItem={addItemToList} />
      <Button className={`${!isActive ? 'notVisible' : 'deleteAll-btn'}`} onClick={handleDeleteAllItems}>Delete all</Button>
      <Filter doFilterD={handleFilterDone} doFilterC={handleFilterClear} active={isActive} />
      <ListItems listItems={item} onAdd={handleDeleteItem} />
    </div>
  );
}

export default App;

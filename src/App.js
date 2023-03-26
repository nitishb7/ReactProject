import React, { useState } from 'react';
import './styles/Container.css';
import './styles/ItemList.css';
import './styles/ListSelector.css';
import Container from './components/Container';
import ItemList from './components/ItemList';
import ListSelector from './components/ListSelector';

const App = () => {
  const [lists, setLists] = useState([
    { id: 1, name: 'List 1', items: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] },
    { id: 2, name: 'List 2', items: [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }] },
    { id: 3, name: 'List 3', items: [{ id: 5, name: 'Item 5' }, { id: 6, name: 'Item 6' }] },
  ]);

  const [selectedList, setSelectedList] = useState(lists[0].id);

  const handleListSelect = (event) => {
    setSelectedList(parseInt(event.target.value));
  };

  const selectedListObj = lists.find((list) => list.id === selectedList);

  return (
    <Container>
      <h1>List Selector App</h1>
      <ListSelector lists={lists} selectedList={selectedList} onSelectList={handleListSelect} />
      <h2>{selectedListObj.name}</h2>
      <ItemList items={selectedListObj.items} />
    </Container>
  );
};

export default App;

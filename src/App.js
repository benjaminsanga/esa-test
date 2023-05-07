import './App.css';

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import { useState, useEffect } from "react"

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const List = (props) => {
  
  const [items, setItems] = useState([])
  
  useEffect(() => {
    setItems(props.items)
  }, [props.items])
  
  if (items.length === 0) {
    return
  }
  
  // Yоur cоdе gоеs hеrе
  const handleItemClick = (e) => {
    let index = e.target.id
    let list = Array.from(items)
    let removed = list.splice(index, 1)
    list.unshift(removed[0])
    
    setItems(list)
  }

  
  return <ul>
  {items?.map((item, index) => {
      return (
        <li key={index} id={index} onClick={(e) => handleItemClick(e)}>
          {item}
        </li>
      )
    
  })}
  </ul>
}
  

function App() {
  return (
    <List items={["A", "B", "C"]} />
  );
}

export default App;

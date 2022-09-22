import "./styles.css";
import {useState} from 'react'

export default function App() {
  const menuConfig = [
    {
      title:"Home"
    },
    {
      title:'Users',
      subItems:['Cooking', 'Cleaning']
    },
    {
      title: 'Chores',
      subItems: ['savour', 'wash Plates']
    }
  ]
  const [toggleitem, setToggleItem] = useState('')
  const [toggle, setToggle] = useState(false)
  const clickHandler = (item) => {
    setToggleItem(item)
    setToggle(!toggle)
  }
  return (
    <div className="App">
      {menuConfig?.map((menu) => {
        const {title, subItems} = menu
        return (
          <div>
            {title}
            {subItems && (
              <button onClick={() => clickHandler(title)}>{toggleitem === title && toggle ? 'Hide': 'Expand'}</button>
            )}
            {toggleitem === title && toggle ? (
              <ul>
                {subItems?.map(item => {
                  return (
                   <li>{item}</li>
                  )
                })}
              </ul>
            ) : ''}
          </div>
        )
      })}
    </div>
  );
}

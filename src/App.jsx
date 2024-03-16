// https://github.com/bonnie/udemy-TESTING-LIBRARY/tree/main
// https://www.udemy.com/course/react-testing-library/learn/lecture/24450618#overview 
import {useState} from 'react'
import './App.css'

function App() {
  const [ value, setValue ] = useState(0);

  const handleClick = (e) => {
    setValue(value + 1)


  }

  return (
    <div>
         <h1>I'm gonna learn React Testing Library</h1> 
         
         <a href="https://www.btmx.com"> www.btmx.com</a>
         <br />
         <hr />
         <button onClick={handleClick} style={{border: '2px solid #c5bfbf'}}>Add</button>
         <p>{value}</p>
        
    </div>

  )
}

export default App

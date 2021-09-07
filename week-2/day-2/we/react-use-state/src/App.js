import { useState } from "react";
import styles from './App.module.css';
import {Todos} from "./components/Todos.jsx"

function App() {

  //   const [count, setCount] = useState(0);

  //   const handleAdd = () => {
  //     let c = count + 1;
  //     setCount(c);
  //   }
  //   const handleAdd1 = () => {
  //     let c = count - 1;
  //     setCount(c);
  // }

  return (
    <div className={styles.App}>
      <div className={styles.main} >
        <Todos />
      </div>
    </div>
  );
}

export default App;

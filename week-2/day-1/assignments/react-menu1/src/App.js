import styles from './App.module.css';
import Block from "./components/Block.jsx";

const docs = [
  { heading: "JOIN US", color: "rgb(12, 229, 236)" },
  { heading: "SETTINGS", color: "rgb(12, 229, 236)" },
  { heading: "LOGIN", color: "rgb(12, 229, 236)" },
  { heading: "CONTACT US", color: "rgb(12, 229, 236)" },
  { heading: "SEARCH", color: "rgb(12, 229, 236)" },
  { heading: "HELP", color: "rgb(12, 229, 236)" },
  { heading: "HOME", color: "rgb(12, 229, 236)" },
  { heading: "DOWNLOAD", color: "rgb(12, 229, 236)" }
]

function App() {
  return (
    <div className={styles['main']}>
      {docs.map(el => <Block style={{ backgroundColor: el.color }} heading={el.heading }/>)}
    </div>
  );
}

export default App;

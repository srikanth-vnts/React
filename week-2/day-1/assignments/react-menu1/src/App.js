import styles from './App.module.css';
import Block from "./components/Block.jsx";

const docs = [
  { heading: "JOIN US", color: "rgb(12, 229, 236)" },
  { heading: "SETTINGS", color: "rgb(106, 142, 143)" },
  { heading: "LOGIN", color: "rgb(240, 159, 9)" },
  { heading: "CONTACT US", color: "rgb(235, 0, 0)" },
  { heading: "SEARCH", color: "rgb(9, 194, 3, 0.973)" },
  { heading: "HELP", color: "(55, 6, 168)" },
  { heading: "HOME", color: "(248, 47, 248)" },
  { heading: "DOWNLOAD", color: "rgb(128, 98, 1)" }
]

function App() {
  return (
    <div className={styles['main']}>
      {docs.map(el => <Block colors={el.color } heading={el.heading }/>)}
    </div>
  );
}

export default App;

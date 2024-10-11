import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./componets/navbar/navbar";

function App() {
  return  (
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About />
    <Experience />
    <Contact />
    <projects />
  </div>
);
}

export default App;

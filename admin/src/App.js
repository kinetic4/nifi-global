import "react-perfect-scrollbar/dist/css/styles.css";
import "../src/css/style.css";
import "./App.css";
import Router from "./jsx/router";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.querySelector('body').classList.add('dark-theme');

    const saveDarkMode = localStorage.getItem('darkMode')

    if(saveDarkMode === 'false') {
      document.querySelector("body").classList.remove('dark-theme')
    } else {
      document.querySelector("body").classList.add('dark-theme')
    }
  }, []);


  return (
    <>
      <Router />
    </>
  );
}

export default App;

import React from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { List1,List2 } from "./component/List/List";
import Lists from './component/List/List'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TodoApp/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    // <>
    // <List1/>
    // <List2/>
    // <Lists/>
    // </>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom"
import {About, Post, Project, SinglePost} from './components/index.js'

const  Home = () => {
  return (
    <h1>Home</h1>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<About />} path="/about"/>
        <Route element={<SinglePost />} path="/post/:slug"/>
        <Route element={<Post />} path="/post"/>
        <Route element={<Project />} path="/project"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

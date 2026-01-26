// import './App.css'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Project from './Pages/Project'
import NavBar from './Componenets/NavBar'
// import Contact from './Pages/Contact'
import Footer from './Componenets/Footer'
// import ProjectCard from './Componenets/ProjectCard'
// function App() {

//   return (
//     <div>
//       <NavBar />
//       <Home />
//       <About />
//       <Project />
//       <Contact />
//       <Footer />
//     </div>
//   )
// }

// export default App


import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
// import NavBar from "./Components/NavBar";
// import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

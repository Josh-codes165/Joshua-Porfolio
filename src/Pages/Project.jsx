// import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.png";
// import img3 from "../assets/img3.png";
// import img4 from "../assets/img4.png";
// import img5 from "../assets/img5.png";
// import img6 from "../assets/img6.png";
// import { Link } from "react-router";

// function Project() {
//   return (
//     <div className="projects">
//       <h1>Projects</h1>
//       <div className="total_project">
//         <Link to={`https://blog-website-two-beryl.vercel.app/`}>
//           <div className="projectdiv">
//             <img src={img1} alt="" />
//             <p>Blog Website</p>
//           </div>
//         </Link>
//         <Link to={`https://quizz-app-sandy-iota.vercel.app/`}>
//           <div className="projectdiv">
//             <img src={img2} alt="" />
//             <p>Quiz App</p>
//           </div>
//         </Link>
//         <Link to={`https://weather-app-gamma-three-58.vercel.app/`}>
//           <div className="projectdiv">
//             <img src={img3} alt="" />
//             <p>Weather App</p>
//           </div>
//         </Link>
//         <Link to={`https://to-do-ap-seven.vercel.app/`}>
//           <div className="projectdiv">
//             <img src={img4} alt="" />
//             <p>To-do-List App</p>
//           </div>
//         </Link>
//         <Link to={`https://login-form-omega-vert.vercel.app/`}>
//           <div className="projectdiv">
//             <img src={img5} alt="" />
//             <p>Login Form</p>
//           </div>
//         </Link>
//         <Link to={`https://calculator-two-drab-61.vercel.app/`}>
//           <div className="projectdiv">
//             <img src={img6} alt="" />
//             <p>Multi-Calculator</p>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Project;


import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const projects = [
  {
    title: "Blog Website",
    image: img1,
    url: "https://blog-website-two-beryl.vercel.app/",
  },
  {
    title: "Quiz App",
    image: img2,
    url: "https://quizz-app-sandy-iota.vercel.app/",
  },
  {
    title: "Weather App",
    image: img3,
    url: "https://weather-app-gamma-three-58.vercel.app/",
  },
  {
    title: "To-Do App",
    image: img4,
    url: "https://to-do-ap-seven.vercel.app/",
  },
  {
    title: "Login Form",
    image: img5,
    url: "https://login-form-omega-vert.vercel.app/",
  },
  {
    title: "Multi Calculator",
    image: img6,
    url: "https://calculator-two-drab-61.vercel.app/",
  },
];

function Project() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Project;

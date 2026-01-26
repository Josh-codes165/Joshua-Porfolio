// import myImage from"../assets/Image1.png"

// function Home() {
//     return (
//         <div className="focus-area">
//             <div className="info" >
//                 <h1>I'M <span>JOSHUA OKORONKWO</span></h1>
//                 <p>Frontend Developer</p>
//             </div>
//             <img src={myImage} alt=""  className="img22"/>
//         </div>
//     )
// }

// export default Home

import myImage from "../assets/Image1.png";

function Home() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={myImage} alt="Portrait of Joshua Okoronkwo" />
      </div>
      <div className="hero-text">
        <h1>
          Hi, I’m <span>Joshua Okoronkwo</span>
        </h1>
        <p className="role">Frontend Developer & Web3 Enthusiast</p>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="https://wa.link/34h52h" className="btn outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

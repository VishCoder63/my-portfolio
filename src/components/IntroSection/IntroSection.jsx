import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import "../IntroSection/intro.css";
import pic from "./pics/8pp 4-removebg-preview (1).jpg";
export function IntroSection() {
  return (
    <div id="intro-div">
      <div>
        <img src={pic} alt="" />
      </div>
      <div>
        <h1>👋👋👋 I'm Vishnu Nair</h1>
        <p>
          Process-oriented and growth-minded full-stack developer specializing
          in MERN stack. With a keen interest in problem solving and web
          development, actively seeking to enter a challenging and growth
          focused company.
          <br />
          <br />I have an experience of building Web apps using HTML / CSS /
          JavaScript / Reactjs / Redux / Nodejs / MongoDb etc. Actively learning new
          technologies and looking out for ways to apply my learnings.
        </p>

        <div className="resume">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1IVIBU2N4sM1HYPF2op1YmxXJduYuCCvu/view?usp=sharing"
          >
            Resume
          </a>
        </div>
        <br />
        <div className="socials">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nair-vishnu-s-81a678193/"
          >
            <FaLinkedin size={30} />
          </a>
          <a target="_blank" href="https://github.com/VishCoder63">
            <FaGithubSquare size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

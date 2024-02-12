import React from 'react';
import './skills.css';
import WebDeveloper from '../../assets/WebDeveloper.jpeg';
import ReactDesign from '../../assets/react-design.png';
import Technical from '../../assets/Technical.png';
import Database from '../../assets/Database.png';
import Visualization from '../../assets/Visualization.jpeg';
import Developer from '../../assets/Developer.jpeg';
import Softskills from '../../assets/Softskills.jpeg';
import Selfawareness from '../../assets/Selfawareness.jpeg';

const Skills = () => {
  return (
    <section id='skills'>   
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web Developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail.I am proficient in HTML,CSS,Javascript,as well as studied different frameworkd like React,NodeJS,ExpressJS.And also having expertise in Data Analysis </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={WebDeveloper} alt="WebDeveloper" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Developer</h2>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>PHP</p>
                    <p>ReactJS , ExpressJS</p>
                    <p>NodeJS</p>
                    <p>MongoDB</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={ReactDesign} alt="ReactDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>React Developer</h2>
                    <p>I am a skilled React developer with a passion for crafting exceptional web applications. With a deep understanding of the React library, I have a track record of creating engaging and responsive user interfaces that offer seamless and enjoyable user experiences. I am well-versed in creating single-page applications (SPAs).</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Technical} alt="Technicalskills" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Technical Languages known</h2>
                    <p>C++</p>
                    <p>Python</p>
                    <p>SQL</p>
                    <p>PHP</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    </div>
            </div>
            <div className="skillBar">
                <img src={Database} alt="Database" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Databases</h2>
                    <p>PHPMYADMIN</p>
                    <p>MYSQL</p>
                    <p>MongoDb</p>
                    </div>
            </div>
            <div className="skillBar">
                <img src={Visualization} alt="VisualizationTools" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Visualization Tools</h2>
                    <p>Microsoft PowerBI</p>
                    <p>Tableau</p>
                    </div>
            </div>
            <div className="skillBar">
                <img src={Developer} alt="DeveloperTools" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Developer Tools</h2>
                    <p>Visual Studio Code</p>
                    <p>Replit</p>
                    <p>SQL Server Management Studio</p>
                    <p>Postman</p>
                    </div>
            </div>
            <div className="skillBar">
                <img src={Softskills} alt="Softskills" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Soft Skills</h2>
                    <p>Leadership </p>
                    <p>Communication</p>
                    <p>Creative Thinking</p>
                    <p>Time Management </p>
                    <p>Decision Making</p>
                    </div>
            </div>
            <div className="skillBar">
                <img src={Selfawareness} alt="Selfawareness" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Selfawareness</h2>
                    <p>OOPS</p>
                    <p>DBMS</p>
                    <p>DSA</p>
                    <p>Machine Learning</p>
                    <p>Software Engineering </p>
                    <p>Computer Networks</p>
                    <p>Operating System</p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;

import React from 'react';
import './intro.css';
import bg from '../../assets/Abhay1.jpg';
import btnImg from '../../assets/hireme.png'
// import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText"> I'm <span className="introName"> Abhay </span> <br /> Web Developer </span>
            <p className="introPara">I am a skilled full stack web developer with 1 year of personal experience in creating visually interactive and user-friendly websites. </p>
            <p className="introPara">Persuing my BTech Final Year from Government College of Engineering Amravati in Information Technology</p>
            <p className="introPara">CGPA-8.80</p>
            <a href="https://drive.google.com/file/d/1_CQSJSgdvvjiLMqCH5C33669aRXPdjK_/view?usp=sharing"><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></a>
            </div>
            <div className="imageContainer">
        <img src={bg} alt="Profile" className="bg" />
        </div>
    </section>
  )
}

export default Intro;

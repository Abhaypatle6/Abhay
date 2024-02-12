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
            <p className="introPara">I am a skilled full stack web developer with 1 year of personal experience in creating <br/>visually interactive and user-friendly websites. </p>
            <p className="introPara">Persuing my BTech Final Year from Government College of Engineering Amravati in Information Technology</p>
            <p className="introPara">CGPA-8.78</p>
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:0bac9728-b708-4d2b-b8cf-a9c79377918c"><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></a>
            </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;

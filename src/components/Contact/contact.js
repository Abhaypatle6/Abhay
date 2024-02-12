import React, { useRef } from 'react';
import './contact.css';
import Persistent from '../../assets/persistent.jpg';
import Certificate from '../../assets/certificate.png';
import codingninjaIcon from '../../assets/codingninja.jpeg';
import LinkedinIcon from '../../assets/linkedin.png';
import HackerRankIcon from '../../assets/hackerrank.jpeg';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0gmmhh9', 'template_k7esayk', form.current, 'MtIMKBiyNZokt7089')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent!');
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id="contactpage">

      <div id="clients">
        <h1 className="contactPageTitle">My Experience</h1>
        <p className="clientDesc">I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with, include <b>Persistent Systems Pvt Ltd.</b> where 
        I have Completed a 2-month intensive internship program focusing on Linux, Database Management System (DBMS), Data Structures and Algorithms (DSA), and Python .Developed proficiency in Linux system .
        Gained hands-on experience in working with databases and SQL, improving database design and management skills. </p>
        <div className="clientImgs">
          <img src={Persistent} alt="Persistent Systems" className="clientImg" />
          <img src={Certificate} alt="certificate" className="clientImg" />
        </div>

      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='your_name' />
          <input type="email" className="email" placeholder='Your Email' name='your_email' />
          <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className="submitBtn" >Submit</button>
          <div className="links">
            <a href="https://www.codingninjas.com/studio/profile/397af0b0-b8f4-4083-9fdd-f68d93710906">
            <img src={codingninjaIcon} alt="CodingNinja" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/abhay-patle-043694235/">
            <img src={LinkedinIcon} alt="Linkedin" className="link" />
            </a>
            <a href="https://www.hackerrank.com/dashboard">
            <img src={HackerRankIcon} alt="HackerRank" className="link" />
            </a>
            <a href="https://www.instagram.com/a_star_abhay/">
            <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
          </div>
        </form>


      </div>
    </section>
  );
}

export default Contact;

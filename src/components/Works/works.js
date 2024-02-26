import React from 'react';
import './works.css';
// import uidesign from '../../assets/ui-design.png';
// import website from '../../assets/website-design.png';
// import appdesign from '../../assets/app-design.png';
// import work from '../../assets/work5.jpg';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. <br />I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="worksImgs">
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:d4341706-63b9-43d0-933f-1b506090cc9e">
            <div className="projectInfo">
            <img src={Portfolio5} alt="" className="worksImg" />
            <p>Placement Website</p>
            </div></a>
            <a href="https://weatherhcj.vercel.app/">
              <div className="projectInfo">
            <img src={Portfolio6} alt="" className="worksImg" />
            <p>Weather App</p>
        </div></a>
        <a href="https://qr-generator-phi-three.vercel.app/">
            <div className="projectInfo">
            <img src={Portfolio5} alt="" className="worksImg" />
            <p>QR Generator</p>
        </div>
            </a>
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:bf3b0ed1-7b47-4d34-8923-1c4d35900e2c">
              <div className="projectInfo">
            <img src={Portfolio5} alt="" className="worksImg" />
            <p>Data Visualization</p>
        </div></a>
            {/* <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:945422bb-bcea-484d-ab37-79dd095e6fbb">
            <div className="projectInfo">
            <img src={Portfolio6} alt="" className="worksImg" />
            <p>Word Cloud Project</p>
        </div>
            </a> */}
            
        </div>
        {/* <button className="workBtn">See More</button> */}
    </section>
  )
}

export default works;

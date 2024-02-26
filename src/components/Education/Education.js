// Education.js
import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <section className="education section">
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle">My Academic Journey</span>

      <div className="education__container container">
        <div className="education__tabs">
          <div
            className={activeTab === 1 ? "education__tab education__tab--active" : "education__tab"}
            onClick={() => toggleTab(1)}
          >
            <span className="education__icon" role="img" aria-label="graduation-cap">🎓</span>
            <span className="education__tab-title">Graduation</span>
          </div>
          <div
            className={activeTab === 2 ? "education__tab education__tab--active" : "education__tab"}
            onClick={() => toggleTab(2)}
          >
            <span className="education__icon" role="img" aria-label="graduation-cap">🎓</span>
            <span className="education__tab-title">Junior College</span>
          </div>
          <div
            className={activeTab === 3 ? "education__tab education__tab--active" : "education__tab"}
            onClick={() => toggleTab(3)}
          >
            <span className="education__icon" role="img" aria-label="graduation-cap">🎓</span>
            <span className="education__tab-title">High School</span>
          </div>
          {/* Add more tabs as needed */}
        </div>

        <div className="education__content">
          {activeTab === 1 && (
            <div className="education__info">
              <h3 className="education__degree">Bachelor of Technology In Information Technology</h3>
              <p className="education__institution">GOvernment College Of Engineering Amravati(GCOEA)</p>
              <div className="education__duration">
                <span role="img" aria-label="calendar">📅</span> 2020 - 2024
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="education__info">
              <h3 className="education__degree">Junior College(HSC)</h3>
              <p className="education__institution">GBMM Junior College Hinganghat</p>
              <div className="education__duration">
                <span role="img" aria-label="calendar">📅</span> 2019 - 2020
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className="education__info">
              <h3 className="education__degree">High School Diploma(10th)</h3>
              <p className="education__institution">ST. John's High School CBSE Hinganghat</p>
              <div className="education__duration">
                <span role="img" aria-label="calendar">📅</span> 2017 - 2018
              </div>
            </div>
          )}
          {/* Add more education info as needed */}
        </div>
      </div>
    </section>
  );
};

export default Education;

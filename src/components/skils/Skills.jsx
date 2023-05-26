import React from 'react';
import './skills.css'

const Skill = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <h3>HTML/CSS</h3>
          <div className="skill-level">
            <div className="skill-progress" style={{ width: '99%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>Machine Learning</h3>
          <div className="skill-level">
            <div className="skill-progress" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>Django</h3>
          <div className="skill-level">
            <div className="skill-progress" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>JavaScript</h3>
          <div className="skill-level">
            <div className="skill-progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>Python</h3>
          <div className="skill-level">
            <div className="skill-progress" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>React.js</h3>
          <div className="skill-level">
            <div className="skill-progress" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

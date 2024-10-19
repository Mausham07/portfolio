import "./about.css";
import photo from '../../img/about.jpg'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={photo}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
        I am a computer science student at Brigham Young University - Idaho, passionate about data engineering, and software engineering. 
        Experienced in tutoring, leading, and collaborating on various projects using Python, SQL, C#, Django, JavaScript and other tools. 
        I have analyzed large datasets using Python, pandas, and seaborn to extract insights on various projects. 
        In addition, I have created several web applications and games that also showcase my technical skills and creativity. 
        I am always excited to learn new technologies and apply them to address real-world problems. Currently I am looking for opportunities 
        that will help me to grow professionally and contribute to the field of data engineering.
        </p>
        </div>
    </div>
  );
};

export default About;

import "./intro.css";
import sample from '../../utils/sample.pdf'
import background from '../../img/background.png'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I am</h2>
          <h1 className="i-name">MAUSHAM BISTA</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Data Engineer</div>
              <div className="i-title-item">Software Developer</div>
              <div className="i-title-item">Data Analyst</div>
            </div>
          </div>
          <p className="i-desc">
          an aspiring data enginee with a passion for machine learning. Exploring the intersection of 
          technology and innovation to create intelligent solutions for a better future.
          </p>
          <div className="resume">
            <a href={sample} download="DS_mausham_resume.pdf">Resume</a>
          </div>
        </div>
        <div className="right-wrapper">
          <img src={background} alt="" />
        </div>
       </div>
    </div>
  );
};

export default Intro;


import './PageStyles.css';

const About = () => {
  return (
    <div className="page-container fade-in">
      <h1>About Us</h1>
      <p>This app allows users to switch between beautiful themes built with React.</p>

      <button className="theme-button">Learn More</button>

      <div className="product-list">
        <div className="product-card">
          <h4>Fast</h4>
          <p>Switch themes instantly</p>
        </div>
        <div className="product-card">
          <h4>Clean</h4>
          <p>Minimal and smooth layout</p>
        </div>
        <div className="product-card">
          <h4>Modern</h4>
          <p>Built with latest tools</p>
        </div>
      </div>
    </div>
  );
};

export default About;

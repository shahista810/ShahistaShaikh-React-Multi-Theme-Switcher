
import './PageStyles.css';

const Contact = () => {
  return (
    <div className="page-container fade-in">
      <h1>Contact Us</h1>
      <p>Feel free to reach out via email: example@example.com</p>

      <button className="theme-button">Send Message</button>

      <div className="product-list">
        <div className="product-card">
          <h4>Email</h4>
          <p>support@example.com</p>
        </div>
        <div className="product-card">
          <h4>Phone</h4>
          <p>+91 98765 43210</p>
        </div>
        <div className="product-card">
          <h4>Address</h4>
          <p>Pune, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

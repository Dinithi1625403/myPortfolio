import "./contact.css";
import { useEffect } from "react";
export default function Contact() {
  useEffect(() => {
    const handleScroll = () => {
      var aboutSection = document.querySelector('.contact-container');
      var position = aboutSection.getBoundingClientRect();
  
      // Checking if the element is in the viewport
      if (position.top < window.innerHeight && position.bottom >= 0) {
        aboutSection.style.animation = 'fadeIn 2s ease-out forwards';
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <div id="contact" className="contact-container">
      <h1>Contact Me 📞</h1>
      <div className="contact-card">
      <h4>Let's Work Together 🤝</h4>
      <br/>
      <p>Got a question, a project idea, or just want to say hi? I’d love to hear from you. Fill out the form below, or reach out to me directly via email or social media! 📧</p>
      
      </div>
    
    <div className="contact-form">
        <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button className="send">Send </button>
        </form>
    </div>
    </div>
    </>
  );
}
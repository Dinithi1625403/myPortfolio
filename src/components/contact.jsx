import "./contact.css";
import { useEffect } from "react";
import ContactForm from "./contactForm";
export default function Contact() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.contact-container,.contact-card, input, textarea, .send');
      elements.forEach(element => {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        element.style.animation = 'fadeIn 2s ease-out forwards';
      }
      });
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
    
    <ContactForm />
    </div>
    </>
  );
}
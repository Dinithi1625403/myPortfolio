import "./about.css";
window.addEventListener('scroll', function() {
  var aboutSection = document.querySelector('.about');
  var position = aboutSection.getBoundingClientRect();

  // checking for partial visibility
  if(position.top < window.innerHeight && position.bottom >= 0) {
      aboutSection.style.animation = 'slideInFromLeft 1s ease-out forwards';
  }
});
function About() {
  return (
    
    <div className="container" >
      <h1 className="title">About me</h1>
     <div className="about">
      
      <p className="description"> I’m a web developer who loves creating simple, user-friendly websites and applications. I’m currently studying for a BSc (Hons) in IT and always enjoy learning new skills, like React, to improve my work.

I have a diploma in English Language and Literature, which helps me communicate and share ideas effectively. When I’m not coding, I spend time with my family and enjoy exploring new ways to grow and learn.

I’m always excited to take on new challenges and create something meaningful. Let’s connect and make something great together!</p>

      </div>
    </div>
  );
  

}
export default About;
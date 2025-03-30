import React, { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpwpjypb");
  const successMessageShown = useRef(false);

  if (state.succeeded && !successMessageShown.current) {
      alert("We will get back to you as soon as possible. Thank you for reaching out!");
      successMessageShown.current = true;
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
  }
  return (
    <div className='contact-form'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Enter your email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Write your message here"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}


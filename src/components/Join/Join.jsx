import React, {useRef} from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';

const Join = () => {
    /* function for receiving/sending the email using emailjs */
        /*copied the template from emailjs official website.*/

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_b94he1x', 'template_r5zexib', form.current, 'Oznp3xP025rGOmQbx')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr/> {/* for the horizontal line at top */}
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>

      <div className="right-j">
        <form ref ={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Enter your Email address"/>
            <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;

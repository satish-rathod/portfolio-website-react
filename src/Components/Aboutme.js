import React from 'react';
import './Aboutme.css';
import img from '../assets/images/PSX_20211107_140507.jpg';
const Aboutme = () => {
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <div className="content">
                <div className="text">
                <p className="bold">
                I am a first-year Computer Science undergraduate student at Scaler School of Tech, Bangalore
            </p>
            <p>
                I am currently proficient in competitive programming and comfortable with Java and Python. I have a passion for problem-solving and mathematics. I am also capable of working as a backend developer.
            </p>
                    <div className="contact-info">
                        <div className='info'> 
                            <h3>phone</h3>
                            <p>+91 9511717372</p>
                        </div>

                        <div className='info'> 
                            <h3>email</h3>
                            <p>satrat@gmail.com</p>
                        </div>

                        <div className='info'> 
                            <h3>website</h3>
                            <p>satrat.com</p>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src={img} alt="profile" /> 
                    <div className="social-links">
                    <button className="button1">Button 1</button>
                    <button className="button2">Button 2</button>
                    <button className="button3">Button 3</button>
                    <button className="button4">Button 4</button>
                    <button className="button5">Button 5</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;